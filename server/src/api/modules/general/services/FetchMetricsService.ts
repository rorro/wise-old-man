import { Metric } from '@prisma/client';
import { getMetricName } from '../../../../utils';

// const BASE_IMAGE_URL = `https://raw.githubusercontent.com/wise-old-man/wise-old-man/refs/heads/master/app/public/img/metrics_small/`;

interface MetricName {
  metric: string;
  name: string;
}

interface MetricResult {
  version: number;
  metrics: MetricName[];
}

const version = 0.1;

async function fetchMetrics() {
  const result: MetricName[] = [];

  for (const m of Object.keys(Metric)) {
    result.push({
      metric: m,
      name: getMetricName(m as Metric)
    });
  }

  const res: MetricResult = { version, metrics: result };

  return res;
}

export { fetchMetrics };
