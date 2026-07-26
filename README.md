# JS-Exercises

Extra JavaScript exercises from the Orange training track — the six questions that come
after the main JS task.

## Live demo

**https://mayahelmi.github.io/JS-Exercises/**

Each button runs one question and shows the result with `alert()`.
Q1 prints its values to the browser console (`F12` → Console).

## The questions

**Q1 — Evaluate the expressions**

| Expression | Value |
|---|---|
| `-9 * 3` | `-27` |
| `"value is " + 50` | `"value is 50"` |
| `17 % 5` | `2` |
| `5 % 17` | `5` |
| `5 / 10` | `0.5` |
| `4 == 4` | `true` |
| `4 != 5` | `true` |
| `7 <= 8` | `true` |
| `Math.ceil(x) - Math.floor(x)` | `0` if `x` is a whole number, `1` if it has a decimal part |

**Q2** — Read a number with `prompt` and display it with `alert`.

**Q3** — Read two numbers and display them in ascending order.

**Q4** — Read two numbers and display the larger one.

**Q5** — Read two numbers and display their sum.

> **The problem:** `prompt()` always returns a **string**, so `+` joins the two values
> instead of adding them — entering `5` and `10` gives `"510"`, not `15`.
> **The fix:** convert the input with `Number()` before adding.
> The other operators (`-`, `*`, `/`, `%`) don't have this problem, because only `+`
> is also used for joining text.

**Q6** — Read a number and print `ONE` … `NINE`, or `PLEASE TRY AGAIN` for anything else.

## Files

- `index.html` — one button per question
- `app.js` — the six functions `q1()` … `q6()`
- `style.css` — page styling

No build step, no libraries. Open `index.html` in a browser.
