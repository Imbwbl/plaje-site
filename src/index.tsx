import { Hono } from "hono";
import { renderer } from "./renderer";

import Home from "./pages/home";
import Calendar from "./pages/calendar";
import Contact from "./pages/contact";

const app = new Hono();

app.use(renderer);

app.get("/", (c) => {
  return c.render(Home());
});

app.get("/calendar", (c) => {
  return c.render(Calendar());
});

app.get("/contact", (c) => {
  return c.render(Contact());
});

export default app;
