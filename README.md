# Cod_20-0

A React recreation of **20-0: The All-Time CDL Gauntlet**.

The playable squad database is generated from the markdown files in this repository:

- `cdl_gauntlet_pre_cdl_12_team_patch_v2.md` for the 12-team pre-CDL title pools.
- `cdl_gauntlet_database_v1.md` for the CDL-era team pools.

## Scripts

```bash
npm run generate:squads
npm run lint:data
npm run build
```

`src/data/squads.js` is generated code. Update the markdown tables first, then rerun `npm run generate:squads`.
