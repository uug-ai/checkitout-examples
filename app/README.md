# Checkitout Widget Examples

This app shows how to add the Checkitout checkout widget to an existing site. The widget is distributed as a CSS file plus a UMD JavaScript bundle, so it can be used from plain HTML, React, Vue, server-rendered pages, or any other frontend that can render a button or link.

The live example integration is in `src/sites/wilde-westen/WildeWestenDetail.tsx`.

## Quick start

Add the widget stylesheet and script once on every page where checkout can be opened. In this repo they are loaded from jsDelivr in `index.html`:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/uug-ai/checkitout-examples@v1.3.3/app/public/assets/checkout-plugin.css"
/>
<script
  src="https://cdn.jsdelivr.net/gh/uug-ai/checkitout-examples@v1.3.3/app/public/assets/checkout-plugin.umd.js"
  async
></script>
```

Then add the `checkout-plugin` class to the element that should open the widget:

```html
<button type="button" class="checkout-plugin">
  Buy tickets
</button>
```

The plugin auto-initializes when the script loads. It listens for clicks on any element with the `checkout-plugin` class, including elements rendered later by a client-side framework.

## Passing checkout data

Use `data-*` attributes on the trigger element for checkout context. The current example passes the event id and event name from the selected event:

```tsx
<button
  type="button"
  className="ww-detail-ticket-btn checkout-plugin"
  data-event-id={event.id}
  data-event-name={event.name}
>
  koop tickets
</button>
```

The bundled widget also reads `data-coins-required` when present:

```html
<button
  type="button"
  class="checkout-plugin"
  data-event-id="jazz-cats"
  data-event-name="Jazz Cats"
  data-coins-required="25"
>
  Buy tickets
</button>
```

Attribute reference:

| Attribute | Required | Description |
| --- | --- | --- |
| `class="checkout-plugin"` | Yes | Marks an element as a checkout trigger. |
| `data-event-id` | Recommended | Your event, product, plan, or item identifier. |
| `data-event-name` | Recommended | Human-readable name for the item being purchased. |
| `data-coins-required` | Optional | Numeric coin cost shown by the widget. Defaults to `0` when omitted or invalid. |

## React integration example

For React, load the CSS and script in your HTML shell, then add the trigger class in JSX:

```tsx
type CheckoutButtonProps = {
  event: {
    id: string
    name: string
    coinsRequired?: number
  }
}

export function CheckoutButton({ event }: CheckoutButtonProps) {
  return (
    <button
      type="button"
      className="checkout-plugin"
      data-event-id={event.id}
      data-event-name={event.name}
      data-coins-required={event.coinsRequired}
    >
      Buy tickets
    </button>
  )
}
```

Because the widget uses delegated click handling, you do not need a React effect for buttons that mount after the script loads.

## Local development

Install dependencies and run the example app:

```sh
npm install
npm run dev
```

Build the app before publishing changes:

```sh
npm run build
```

## Updating the hosted widget version

The CDN URLs in `index.html` are pinned to a repository tag:

```text
https://cdn.jsdelivr.net/gh/uug-ai/checkitout-examples@v1.3.3/app/public/assets/checkout-plugin.umd.js
```

When publishing a new widget build, create a new tag and update both the CSS and JavaScript URLs to that tag. Pinning versions prevents unrelated widget changes from changing behavior on existing integrations.
