# Checkitout Widget Examples

This app shows how to add the Checkitout checkout widget to an existing site. The widget is distributed as a CSS file plus a UMD JavaScript bundle, so it can be used from plain HTML, React, Vue, server-rendered pages, or any other frontend that can render a button or link.

The live example integration is in `app/src/sites/wilde-westen/WildeWestenDetail.tsx`.

## Quick start

Add the widget stylesheet and script once on every page where checkout can be opened. In this repo they are served from `app/public/assets`:

```html
<link rel="stylesheet" href="/assets/checkout-plugin.css" />
<script src="/assets/checkout-plugin.umd.js" defer></script>
```

The widget uses its built-in API configuration, so no API URL setup is needed.

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
  data-product-id={event.productId}
>
  koop tickets
</button>
```

The bundled widget requires the Urbain product ID and retrieves the current coin
cost from the Checkitout API:

```html
<button
  type="button"
  class="checkout-plugin"
  data-event-id="jazz-cats"
  data-event-name="Jazz Cats"
  data-product-id="13"
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
| `data-product-id` | Yes | Numeric Urbain product ID used to retrieve the current coin price. |

## React integration example

For React, load the CSS and script in your HTML shell, then add the trigger class in JSX:

```tsx
type CheckoutButtonProps = {
  event: {
    id: string
    name: string
    productId: number
  }
}

export function CheckoutButton({ event }: CheckoutButtonProps) {
  return (
    <button
      type="button"
      className="checkout-plugin"
      data-event-id={event.id}
      data-event-name={event.name}
      data-product-id={event.productId}
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
cd app
npm install
npm run dev
```

Build the app before publishing changes:

```sh
cd app
npm run build
```

## Updating the bundled widget

Copy a new plugin build into the example before publishing:

```sh
cp ../checkitout/checkout-plugin/dist/checkout-plugin.umd.cjs app/public/assets/checkout-plugin.umd.js
cp ../checkitout/checkout-plugin/dist/checkout-plugin.css app/public/assets/checkout-plugin.css
```