import posthog from 'posthog-js';

let enabled = false;

export const initAnalytics = () => {
  const key = process.env.POSTHOG_KEY;
  const host = process.env.POSTHOG_HOST || 'https://us.i.posthog.com';

  if (!key) {
    console.info('[analytics] No POSTHOG_KEY set — analytics disabled for this session.');
    return;
  }

  posthog.init(key, {
    api_host: host,
    capture_pageview: true,
    capture_pageleave: true,
    autocapture: true,
  });
  enabled = true;
};

export const trackEvent = (name: string, properties?: Record<string, unknown>) => {
  if (!enabled) return;
  posthog.capture(name, properties);
};
