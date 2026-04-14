import { createRequire } from "node:module";

const require = createRequire(new URL("../lib/db/package.json", import.meta.url));
const { Client } = require("pg");

const connectionString = process.env.DATABASE_URL;
const email = process.env.ADMIN_EMAIL || "admin@gymfitpro.com";
const password = process.env.ADMIN_PASSWORD || "Admin123!";
const name = process.env.ADMIN_NAME || "Core X Admin";
const permissions = [
  "members",
  "measurements",
  "attendance",
  "employees",
  "billing",
  "pos",
  "inventory",
  "accounts",
  "reports",
  "admin-users",
  "notifications",
  "settings",
];

if (!connectionString) {
  throw new Error("DATABASE_URL is required");
}

const client = new Client({ connectionString });

await client.connect();

try {
  await client.query(
    `
      insert into admin_users (name, email, password, role, permissions, status)
      values ($1, $2, $3, 'admin', $4::text[], 'active')
      on conflict (email) do update
      set
        name = excluded.name,
        password = excluded.password,
        role = excluded.role,
        permissions = excluded.permissions,
        status = excluded.status
    `,
    [name, email, password, permissions],
  );

  await client.query(
    `
      insert into business_settings (gym_name, address, phone, email, currency, timezone)
      select 'Core X Gym', 'Main Branch, Karachi', '+92 300 0000000', $1, 'PKR', 'Asia/Karachi'
      where not exists (select 1 from business_settings)
    `,
    [email],
  );

  console.log(`Admin user ready: ${email}`);
} finally {
  await client.end();
}
