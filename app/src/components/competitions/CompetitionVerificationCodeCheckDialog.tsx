"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "~/utils/styling";
import { useMutation } from "@tanstack/react-query";
import { CompetitionListItem } from "@wise-old-man/utils";
import { useToast } from "~/hooks/useToast";
import { useWOMClient } from "~/hooks/useWOMClient";
import { Input } from "../Input";
import { Label } from "../Label";
import { Button } from "../Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../Tooltip";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../Dialog";

import InfoIcon from "~/assets/info.svg";
import CheckIcon from "~/assets/check.svg";

interface CompetitionVerificationCodeCheckDialogProps {
  isOpen: boolean;
  competition: CompetitionListItem;
  onValidated: (code: string) => void;
}

export function CompetitionVerificationCodeCheckDialog(
  props: CompetitionVerificationCodeCheckDialogProps
) {
  const { competition, isOpen, onValidated } = props;

  const router = useRouter();

  const toast = useToast();
  const client = useWOMClient();

  const [verificationCode, setVerificationCode] = useState("");

  const checkMutation = useMutation({
    mutationFn: async () => {
      try {
        await client.competitions.editCompetition(competition.id, {}, verificationCode);
      } catch (error) {
        if (!(error instanceof Error) || !("statusCode" in error)) throw new Error();

        // If it failed with 400 (Bad Request), that means it got through the code validation checks
        // and just failed due to an empty payload (as expected)
        if (error.statusCode === 400) return verificationCode;
        throw error;
      }
    },
    onError: (error) => {
      toast.toast({
        variant: "error",
        title:
          "statusCode" in error && error.statusCode === 403
            ? "Incorrect verification code."
            : "An unexpected error occurred. Please try again later.",
      });
    },
    onSuccess: (code) => {
      setTimeout(() => {
        if (code) onValidated(code);
      }, 500);
    },
  });

  function handleClose() {
    router.push(`/competitions/${competition.id}`);
  }

  const hasValidated = !!checkMutation.data;

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(val) => {
        if (!val) handleClose();
      }}
    >
      <DialogContent className="w-[22rem]" hideClose>
        <DialogHeader>
          <DialogTitle>Verification check</DialogTitle>
          <DialogDescription>
            To edit this competition, you must first verify that you are the owner.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            checkMutation.mutate();
          }}
        >
          <div className="mb-2 mt-5 flex items-center">
            {hasValidated ? (
              <>
                <Label className="mr-1 text-xs font-normal text-green-400">Validated</Label>
                <CheckIcon className="h-4 w-4 text-green-400" />
              </>
            ) : (
              <>
                <Label className="text-xs font-normal text-gray-200">Verification code</Label>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>
                      <InfoIcon className="ml-1 h-3 w-3 text-gray-200" />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent align="center" className="text-gray-100">
                    Lost or forgot your code?
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://wiseoldman.net/discord"
                      className="ml-1 text-white underline"
                    >
                      Join our Discord for help
                    </a>
                  </TooltipContent>
                </Tooltip>
              </>
            )}
          </div>
          <Input
            type="password"
            autoFocus
            name="verificationCode"
            autoComplete="verificationCode"
            className={cn(hasValidated && "border-green-400")}
            placeholder="Ex: 123-456-789"
            value={verificationCode}
            disabled={checkMutation.isPending}
            onChange={(e) => setVerificationCode(e.target.value)}
          />

          <div className="mt-4 flex justify-end gap-x-2">
            <Button type="button" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="blue"
              disabled={verificationCode.length === 0 || checkMutation.isPending || hasValidated}
            >
              {hasValidated ? "Please wait..." : checkMutation.isPending ? "Checking..." : "Confirm"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
