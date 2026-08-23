'use client';

import { useEffect } from 'react';
import { capture } from '@/app/lib/attribution';

/**
 * Records the campaign that sent this visitor, once per page load.
 *
 * Renders nothing and runs in an effect, so it neither affects the markup nor
 * opts any route out of prerendering. Mounted in the root layout because an ad
 * can point at any page on the site — the landing page for each ad group is a
 * service page, not the homepage.
 *
 * Unlike <GoogleTag />, this is not gated on the tag being configured: the
 * capture is free, and a stored record is the only way a lead that arrives by
 * email can be traced back to a campaign.
 */
export default function AttributionCapture() {
  useEffect(() => {
    capture();
  }, []);

  return null;
}
