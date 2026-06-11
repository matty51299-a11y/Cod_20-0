# 20-0 CDL Gauntlet Database V1

**Purpose:** first-pass proof-check database for the all-time Call of Duty draft game. This is meant for Matt to review before Codex turns it into the `SQUADS` array.

**Core rule:** ratings are **season-specific**, not career reputation. A player can be elite in one season and mid in another.

**Important status note:**
- **CDL 2020-2026** is the most code-ready section because public season pages give all 12 teams and rosters.
- **Pre-CDL 2011-2019** is a proof-check section. Famous/top teams are listed with ratings, but obscure Champs teams need roster verification before code.
- Ratings are deliberately harsher than the current game file. The current file has too many 90+ players, which kills the draft tension.

---

## Rating Bands

| Rating | Meaning |
|---:|---|
| 96-97 | MVP / generational season, extremely rare |
| 93-95 | elite superstar season |
| 90-92 | top starter / strong pro |
| 87-89 | good starter |
| 84-86 | average or inconsistent starter |
| 80-83 | weak starter / fringe pro / poor season |
| 76-79 | bad card / emergency pick / open bracket level |

## Squad Tiers

| Tier | Squad average guide | Draft feel |
|---|---:|---|
| elite | 91-94 | jackpot card |
| strong | 88-91 | good card, usually safe |
| mid | 84-88 | one or two usable picks |
| weak | 80-84 | painful card |
| disaster | 76-80 | swear-at-the-screen card |

---

# Code-ready CDL Era Database

## 2020 Modern Warfare, 5v5 CDL

| ID | Team | Place | Tier | Game Size | Players |
|---|---:|---:|---|---:|---|
| atl20 | Atlanta FaZe | 1 | elite | 5 | aBeZy SMG 94, Simp FLEX 95, Cellium AR 92, MajorManiak AR 88, Priestahh FLEX 90 |
| dal20 | Dallas Empire | 2 | elite | 5 | Shotzzy SMG 96, Huke FLEX 92, iLLeY FLEX 90, Clayster AR 91, Crimsix AR 91 |
| fla20 | Florida Mutineers | 3 | strong | 5 | Skyz AR 91, Owakening SMG 90, Fero SMG 89, Havok FLEX 87, Frosty FLEX 84 |
| chi20 | Chicago Huntsmen | 4 | strong | 5 | Scump SMG 91, FormaL AR 91, Arcitys FLEX 90, Envoy SMG 90, Prestinni FLEX 85 |
| nysl20 | New York Subliners | 5 | mid | 5 | ZooMaa SMG 87, Attach FLEX 88, Accuracy AR 86, Temp FLEX 85, Mack SMG 86 |
| ldn20 | London Royal Ravens | 6 | mid | 5 | Wuskin AR 89, Skrapz FLEX 87, Dylan SMG 84, Seany FLEX 83, Zer0 AR 84 |
| tor20 | Toronto Ultra | 7 | mid | 5 | Methodz AR 86, Cammy FLEX 86, Bance SMG 85, CleanX SMG 84, Classic FLEX 82 |
| min20 | Minnesota RØKKR | 8 | mid | 5 | GodRx AR 87, Assault AR 84, SiLLY FLEX 83, Asim SMG 84, Alexx SMG 83 |
| ogla20 | OpTic Gaming Los Angeles | 9 | mid | 5 | Dashy AR 88, SlasheR AR 86, TJHaLy SMG 83, Hollow FLEX 81, Drazah FLEX 84 |
| par20 | Paris Legion | 10 | weak | 5 | KiSMET SMG 84, Denz AR 82, Louqa FLEX 82, Shockz FLEX 81, Zed SMG 80 |
| sea20 | Seattle Surge | 11 | weak | 5 | Octane AR 88, Apathy SMG 80, Slacked SMG 79, Pandur FLEX 78, Proto FLEX 78 |
| lag20 | Los Angeles Guerrillas | 12 | disaster | 5 | AquA AR 81, Decemate SMG 79, Vivid SMG 82, Blazt FLEX 80, Saints FLEX 78 |

## 2021 Black Ops Cold War, 4v4 CDL

| ID | Team | Place | Tier | Game Size | Players |
|---|---:|---:|---|---:|---|
| atl21 | Atlanta FaZe | 1 | elite | 4 | aBeZy SMG 96, Simp FLEX 96, Cellium AR 96, Arcitys FLEX 93 |
| tor21 | Toronto Ultra | 2 | elite | 4 | CleanX SMG 94, Cammy FLEX 93, Insight AR 92, Bance FLEX 91 |
| dal21 | Dallas Empire | 3 | strong | 4 | Shotzzy SMG 93, iLLeY FLEX 90, Crimsix AR 89, Vivid SMG 86 |
| optchi21 | OpTic Chicago | 4 | strong | 4 | Scump SMG 91, Dashy AR 93, FormaL AR 89, Envoy SMG 90 |
| nysl21 | New York Subliners | 5 | strong | 4 | HyDra SMG 93, Clayster AR 89, Mack FLEX 86, Asim SMG 86 |
| min21 | Minnesota RØKKR | 6 | mid | 4 | Attach FLEX 89, Priestahh FLEX 87, MajorManiak AR 86, Standy SMG 88 |
| lat21 | LA Thieves | 7 | mid | 4 | Kenny FLEX 87, SlasheR AR 86, John SMG 82, Drazah FLEX 86 |
| fla21 | Florida Mutineers | 8 | mid | 4 | Owakening FLEX 88, Skyz AR 87, Neptune SMG 86, Havok SMG 83 |
| sea21 | Seattle Surge | 9 | weak | 4 | Octane AR 88, Gunless FLEX 84, Prestinni SMG 80, Classic FLEX 80 |
| ldn21 | London Royal Ravens | 10 | weak | 4 | Afro SMG 86, Seany AR 82, Alexx SMG 81, PaulEhx FLEX 83 |
| lag21 | Los Angeles Guerrillas | 11 | weak | 4 | Assault AR 83, Apathy SMG 78, SiLLY FLEX 80, MentaL SMG 77 |
| par21 | Paris Legion | 12 | disaster | 4 | Temp FLEX 85, Skrapz FLEX 82, AquA AR 80, Zaptius SMG 77 |

## 2022 Vanguard, 4v4 CDL

| ID | Team | Place | Tier | Game Size | Players |
|---|---:|---:|---|---:|---|
| atl22 | Atlanta FaZe | 1 | elite | 4 | aBeZy SMG 93, Simp FLEX 94, Cellium AR 95, Arcitys FLEX 91 |
| opt22 | OpTic Texas | 2 | strong | 4 | Scump SMG 90, Shotzzy SMG 94, Dashy AR 93, iLLeY FLEX 88 |
| lat22 | LA Thieves | 3 | elite | 4 | Kenny FLEX 95, Octane AR 92, Envoy SMG 92, Drazah FLEX 94 |
| ldn22 | London Royal Ravens | 4 | mid | 4 | Afro SMG 89, Zer0 AR 86, Nastie FLEX 86, Gismo FLEX 87 |
| sea22 | Seattle Surge | 5 | strong | 4 | Pred SMG 94, Sib FLEX 93, Accuracy AR 88, Mack FLEX 86 |
| bos22 | Boston Breach | 6 | mid | 4 | Methodz AR 86, TJHaLy SMG 84, Nero SMG 86, Vivid SMG 84 |
| tor22 | Toronto Ultra | 7 | mid | 4 | CleanX SMG 90, Insight AR 89, Cammy FLEX 86, Bance FLEX 85 |
| nysl22 | New York Subliners | 8 | mid | 4 | HyDra SMG 92, KiSMET SMG 89, Crimsix AR 86, PaulEhx FLEX 84 |
| fla22 | Florida Mutineers | 9 | weak | 4 | Skyz AR 87, Owakening FLEX 86, MajorManiak AR 81, 2ReaL SMG 80 |
| lag22 | Los Angeles Guerrillas | 10 | mid | 4 | SlasheR AR 87, Huke SMG 86, Asim SMG 84, Spart FLEX 85 |
| min22 | Minnesota RØKKR | 11 | weak | 4 | Attach FLEX 89, Priestahh FLEX 84, Havok SMG 82, Standy SMG 83 |
| par22 | Paris Legion | 12 | disaster | 4 | Temp FLEX 86, GRVTY AR 80, Jimbo SMG 78, oJohnny SMG 77 |

## 2023 MWII, 4v4 CDL

| ID | Team | Place | Tier | Game Size | Players |
|---|---:|---:|---|---:|---|
| atl23 | Atlanta FaZe | 1 | elite | 4 | aBeZy SMG 94, Cellium AR 94, Simp FLEX 94, SlasheR AR 90 |
| opt23 | OpTic Texas | 2 | strong | 4 | Shotzzy SMG 93, Huke SMG 88, Dashy AR 94, Ghosty AR 87 |
| nysl23 | New York Subliners | 3 | elite | 4 | HyDra SMG 97, KiSMET SMG 92, Skyz AR 91, Priestahh FLEX 90 |
| tor23 | Toronto Ultra | 4 | strong | 4 | Scrap FLEX 94, CleanX SMG 92, Insight AR 91, Hicksy SMG 86 |
| lat23 | LA Thieves | 5 | strong | 4 | Octane AR 91, Drazah FLEX 90, Kenny FLEX 88, Envoy SMG 90 |
| min23 | Minnesota RØKKR | 6 | mid | 4 | Attach FLEX 87, Bance FLEX 84, Cammy FLEX 84, Fame SMG 83 |
| bos23 | Boston Breach | 7 | mid | 4 | Owakening FLEX 86, Beans AR 84, Kremp SMG 83, Snoopy SMG 82 |
| sea23 | Seattle Surge | 8 | strong | 4 | Pred SMG 94, Sib FLEX 91, Accuracy AR 86, Mack FLEX 84 |
| vegas23 | Las Vegas Legion | 9 | mid | 4 | Temp FLEX 87, Clayster AR 85, TJHaLy SMG 82, Standy SMG 84 |
| fla23 | Florida Mutineers | 10 | weak | 4 | Brack AR 84, Havok SMG 82, Capsidal SMG 81, Vikul FLEX 80 |
| lag23 | Los Angeles Guerrillas | 11 | weak | 4 | Arcitys AR 86, Assault AR 81, Exceed SMG 79, JoeDeceives FLEX 82 |
| ldn23 | London Royal Ravens | 12 | disaster | 4 | Nastie FLEX 84, Asim SMG 80, Skrapz FLEX 79, Ulisses SMG 77 |

## 2024 MWIII, 4v4 CDL

| ID | Team | Place | Tier | Game Size | Players |
|---|---:|---:|---|---:|---|
| atl24 | Atlanta FaZe | 1 | elite | 4 | aBeZy SMG 93, Cellium AR 94, Simp FLEX 95, Drazah FLEX 92 |
| tor24 | Toronto Ultra | 2 | elite | 4 | CleanX SMG 93, Insight AR 91, Scrap FLEX 96, Envoy SMG 91 |
| opt24 | OpTic Texas | 3 | elite | 4 | Shotzzy SMG 96, Dashy AR 95, Kenny FLEX 93, Pred SMG 94 |
| nysl24 | New York Subliners | 4 | strong | 4 | HyDra SMG 96, KiSMET SMG 90, Skyz AR 90, Sib FLEX 91 |
| sea24 | Seattle Surge | 5 | mid | 4 | Abuzah AR 87, Huke SMG 85, Breszy FLEX 82, 04 SMG 83 |
| lag24 | Los Angeles Guerrillas | 6 | mid | 4 | Diamondcon AR 84, Fame SMG 85, Estreal FLEX 85, Flames SMG 82 |
| lat24 | LA Thieves | 7 | mid | 4 | Ghosty AR 89, Kremp SMG 84, JoeDeceives FLEX 87, Nastie FLEX 85 |
| mia24 | Miami Heretics | 8 | mid | 4 | Vikul SMG 84, Lucky FLEX 83, MettalZ FLEX 83, ReeaL SMG 86 |
| vegas24 | Las Vegas Legion | 9 | weak | 4 | Attach FLEX 86, Nero SMG 84, Gio FLEX 83, oJohnny SMG 80 |
| car24 | Carolina Royal Ravens | 10 | weak | 4 | Clayster AR 84, FeLo FLEX 82, Gwinn SMG 87, TJHaLy SMG 81 |
| min24 | Minnesota RØKKR | 11 | weak | 4 | Accuracy AR 83, Lynz SMG 85, Standy SMG 80, Gunless FLEX 82 |
| bos24 | Boston Breach | 12 | disaster | 4 | Snoopy SMG 84, Priestahh FLEX 80, Beans AR 81, MajorManiak AR 78 |

## 2025 Black Ops 6, 4v4 CDL

| ID | Team | Place | Tier | Game Size | Players |
|---|---:|---:|---|---:|---|
| lat25 | LA Thieves | 1 | elite | 4 | HyDra SMG 96, Scrap FLEX 96, Ghosty AR 92, Envoy SMG 91 |
| atl25 | Atlanta FaZe | 2 | elite | 4 | aBeZy SMG 93, Cellium AR 95, Simp FLEX 95, Drazah FLEX 93 |
| tor25 | Toronto Ultra | 3 | strong | 4 | CleanX SMG 91, Insight AR 89, Beans AR 87, JoeDeceives FLEX 91 |
| van25 | Vancouver Surge | 4 | strong | 4 | Abuzah AR 90, 04 SMG 89, Nastie FLEX 88, Neptune SMG 87 |
| mia25 | Miami Heretics | 5 | mid | 4 | RenKoR AR 90, ReeaL SMG 88, MettalZ FLEX 86, SupeR FLEX 85 |
| car25 | Carolina Royal Ravens | 6 | mid | 4 | Gwinn SMG 88, TJHaLy SMG 83, SlasheR AR 86, Wrecks FLEX 82 |
| opt25 | OpTic Texas | 7 | elite | 4 | Shotzzy SMG 95, Dashy AR 94, Huke SMG 91, Mercules FLEX 95 |
| bos25 | Boston Breach | 8 | mid | 4 | Snoopy SMG 86, Cammy FLEX 85, Owakening FLEX 86, Purj SMG 83 |
| min25 | Minnesota RØKKR | 9 | weak | 4 | Nero SMG 84, Gio FLEX 82, Estreal FLEX 85, Kenny AR 86 |
| c9ny25 | Cloud9 New York | 10 | weak | 4 | Sib FLEX 87, Kremp SMG 82, Capsidal SMG 81, Spart FLEX 80 |
| lagm8_25 | LA Guerrillas M8 | 11 | disaster | 4 | KiSMET SMG 84, Lunarz SMG 79, oJohnny SMG 78, FeLo FLEX 79 |
| lvf25 | Las Vegas Falcons | 12 | disaster | 4 | Exnid FLEX 81, Pred SMG 88, Arcitys AR 81, Priestahh FLEX 78 |

## 2026 Black Ops 7, 4v4 CDL, LIVE/INCOMPLETE

**Use with caution:** current season in progress. Include only if the game wants a live current-season pack.

| ID | Team | Current Tier | Game Size | Players |
|---|---|---:|---:|---|
| opt26 | OpTic Texas | elite | 4 | Shotzzy SMG 95, Dashy AR 94, Huke SMG 91, Mercules FLEX 95 |
| lat26 | Los Angeles Thieves | elite | 4 | aBeZy SMG 94, Kenny FLEX 91, HyDra SMG 96, Scrap FLEX 96 |
| fazeveg26 | FaZe Vegas | elite | 4 | 04 SMG 90, Abuzah AR 91, Drazah FLEX 92, Simp FLEX 94 |
| parism8_26 | Paris Gentle Mates | strong | 4 | Envoy SMG 90, Ghosty AR 91, Neptune SMG 87, Sib FLEX 90 |
| tor26 | Toronto KOI | strong | 4 | ReeaL SMG 88, CleanX SMG 91, JoeDeceives FLEX 89, Insight AR 89 |
| g2min26 | G2 Minnesota | mid | 4 | Skyz AR 88, Estreal FLEX 86, Kremp SMG 84, Mamba SMG 82 |
| mia26 | Miami Heretics | mid | 4 | Traixx SMG 84, MettalZ FLEX 84, RenKoR AR 88, SupeR FLEX 85 |
| bos26 | Boston Breach | mid | 4 | Snoopy SMG 87, Purj SMG 84, Cammy FLEX 85, Nastie FLEX 86 |
| riyadh26 | Riyadh Falcons | strong | 4 | Cellium AR 93, Pred SMG 90, KiSMET SMG 87, Exnid FLEX 83 |
| van26 | Vancouver Surge | weak | 4 | Abe SMG 84, Gwinn SMG 86, Lunarz FLEX 80, Lqgend FLEX 79 |
| car26 | Carolina Royal Ravens | weak | 4 | SlasheR AR 86, Nero SMG 84, Lurqxx FLEX 82, Craze SMG 80 |
| c9ny26 | Cloud9 New York | weak | 4 | Afro SMG 84, Beans AR 84, Mack FLEX 83, Vivid SMG 82 |

---

# Pre-CDL / Champs Era Proof-Check Pool

## Important pre-CDL note
This section is deliberately marked as proof-check because the older Champs fields include regional teams, org changes, and roster volatility. The safest game rule is:

- 2013-2019: use Champs top 12 where possible.
- 2011-2012: use legacy event finalists/known top teams, but do not pretend the data is as clean as CDL era.

## 2011 Black Ops / CoD XP Legacy Candidates

| ID | Team | Tier | Game Size | Players | Proof |
|---|---|---:|---:|---|---|
| optic11 | OpTic Gaming | strong | 4 | BigTymeR AR 88, Rambo FLEX 87, MerK SMG 86, ProoFy SMG 85 | existing code, verify event naming |
| apexeu11 | apeX/eU legacy slot | mid | 4 | TBC AR 84, TBC SMG 83, TBC FLEX 82, TBC SMG 80 | needs roster source |
| fear11 | Team FeaR legacy slot | mid | 4 | TBC AR 84, TBC SMG 82, TBC FLEX 82, TBC SMG 80 | needs roster source |

## 2012 MW3 Legacy Candidates

| ID | Team | Tier | Game Size | Players | Proof |
|---|---|---:|---:|---|---|
| optic12 | OpTic Gaming 2012 | strong | 4 | Scump SMG 90, NaDeSHoT SMG 86, BigTymeR AR 86, MerK FLEX 85 | proof-check |
| envy12 | Team EnVyUs 2012 | strong | 4 | Rambo AR 88, JKap FLEX 86, Stainville FLEX 85, TeePee SMG 85 | proof-check |
| fear12 | Team FeaR 2012 | mid | 4 | Aches FLEX 88, TeePee SMG 85, TBC AR 82, TBC SMG 80 | proof-check |

## 2013 Black Ops 2 Champs Top Pool

| ID | Team | Place | Tier | Players |
|---|---:|---:|---|---|
| impact13 | Fariko Impact | 1 | elite | Karma FLEX 94, KiLLa FLEX 91, Parasite AR 91, MiRx SMG 86 |
| envy13 | Team EnVyUs | 2 | strong | Rambo AR 88, JKap FLEX 88, Stainville FLEX 86, Proofy SMG 86 |
| optic13 | OpTic Gaming | 3 | strong | Scump SMG 92, NaDeSHoT SMG 88, BigTymeR AR 86, MerK FLEX 85 |
| col13 | compLexity | 4 | elite | ACHES FLEX 92, TeePee SMG 90, Crimsix AR 91, Clayster AR 91 |
| fear13 | Team FeaR | 5-6 | mid | Apathy SMG 86, John SMG 85, Assass1n AR 83, TCM FLEX 82 |
| unite13 | UNiTE Gaming | 17-24 | mid | Clayster AR 88, GunShy FLEX 82, ShAnE SMG 82, Tommey FLEX 83 |

## 2014 Ghosts Champs Top Pool

| ID | Team | Place | Tier | Players |
|---|---:|---:|---|---|
| col14 | compLexity | 1 | elite | ACHES FLEX 94, Karma FLEX 94, Crimsix AR 93, TeePee AR 91 |
| envy14 | Team EnVyUs | 2 | strong | Clayster AR 91, JKap FLEX 88, MerK FLEX 86, Rambo FLEX 85 |
| optic14 | OpTic Gaming | 3 | strong | Scump SMG 92, NaDeSHoT SMG 87, MBoZe FLEX 84, Clayster AR 90 |
| tk14 | Team Kaliber | 4 | strong | Sharp SMG 88, Theory AR 86, Goonjar FLEX 85, Neslo AR 84 |
| faze14 | FaZe Clan | 5-6 | mid | Censor SMG 86, Apathy SMG 86, Dedo FLEX 84, Parasite AR 86 |
| eg14 | Evil Geniuses | post-coL | elite | ACHES FLEX 94, Karma FLEX 94, Crimsix AR 93, TeePee AR 91 |

## 2015 Advanced Warfare Champs Top Pool

| ID | Team | Place | Tier | Players |
|---|---:|---:|---|---|
| denial15 | Denial Esports | 1 | elite | Clayster AR 94, JKap FLEX 92, Attach SMG 91, Replays FLEX 88 |
| revenge15 | Team Revenge | 2 | strong | Aqua AR 88, Remy SMG 86, Faccento FLEX 85, Nagafen FLEX 85 |
| fazered15 | FaZe Red | 3 | strong | Enable FLEX 90, SlasheR AR 90, ZooMaa SMG 89, Huke SMG 88 |
| optic15 | OpTic Gaming | 7-8 | elite | FormaL AR 95, Scump SMG 94, Crimsix AR 92, NaDeSHoT SMG 86 |
| opticnation15 | OpTic Nation | mid | 4 | Karma FLEX 88, TeePee AR 86, KiLLa FLEX 83, MiRx SMG 82 |
| aware15 | Aware Gaming | weak | 4 | TBC AR 82, TBC SMG 81, TBC FLEX 80, TBC SMG 79 | verify roster |

## 2016 Black Ops 3 Champs Top Pool

| ID | Team | Place | Tier | Players |
|---|---:|---:|---|---|
| envy16 | Team EnVyUs | 1 | elite | SlasheR AR 95, JKap FLEX 92, Apathy FLEX 91, John SMG 90 |
| splyce16 | Splyce | 2 | strong | Jurd FLEX 89, MadCat AR 88, Bance FLEX 88, Joee SMG 86 |
| elevate16 | Elevate | 3 | mid | Aqua AR 87, Nagafen FLEX 85, Faccento FLEX 84, FeLo SMG 84 |
| fab16 | FAB Games | 4 | mid | Tommey FLEX 86, Rated AR 84, Moose SMG 83, Peatie SMG 82 |
| optic16 | OpTic Gaming | 7-8 | elite | FormaL AR 95, Scump SMG 94, Crimsix AR 93, Karma FLEX 92 |
| rise16 | Rise Nation | 5-6 | strong | Octane AR 91, Loony FLEX 88, Faccento FLEX 86, Classic SMG 85 |
| faze16 | FaZe Clan | 7-8 | strong | ZooMaa SMG 91, Attach SMG 88, Enable FLEX 87, Clayster AR 90 |
| lg16 | Luminosity | 9-12 | mid | Saints SMG 86, Slacked SMG 84, Classic FLEX 84, Ricky AR 82 |

## 2017 Infinite Warfare Champs Top Pool

| ID | Team | Place | Tier | Players |
|---|---:|---:|---|---|
| optic17 | OpTic Gaming | 1 | elite | Scump SMG 96, FormaL AR 95, Crimsix AR 93, Karma FLEX 92 |
| envy17 | Team EnVyUs | 2 | strong | SlasheR AR 91, Apathy SMG 90, JKap FLEX 88, John SMG 88 |
| lg17 | Luminosity | 3 | strong | Octane AR 92, Saints SMG 87, Slacked SMG 86, Classic FLEX 85 |
| rise17 | Rise Nation | 4 | mid | Loony FLEX 87, Aqua AR 86, Faccento FLEX 84, FeLo SMG 84 |
| faze17 | FaZe Clan | 5-6 | strong | ZooMaa SMG 91, Attach SMG 89, Enable FLEX 87, Gunless FLEX 89 |
| eunited17 | eUnited | 5-6 | strong | Arcitys AR 90, Prestinni SMG 87, SiLLY FLEX 86, Clayster AR 89 |
| splyce17 | Splyce | 7-8 | mid | Bance SMG 88, Jurd SMG 86, MadCat AR 85, Zer0 AR 86 |
| redreserve17 | Red Reserve | 9-12 | mid | Rated AR 85, Joee SMG 84, Joshh FLEX 83, Urban SMG 82 |

## 2018 WWII Champs Top Pool

| ID | Team | Place | Tier | Players |
|---|---:|---:|---|---|
| eg18 | Evil Geniuses | 1 | elite | SiLLY FLEX 91, Apathy SMG 91, Assault AR 90, ACHES FLEX 88 |
| tk18 | Team Kaliber | 2 | strong | Kenny FLEX 93, Accuracy AR 90, Fero SMG 89, Enable FLEX 87 |
| faze18 | FaZe Clan | 3 | strong | Attach SMG 89, ZooMaa SMG 88, Replays FLEX 86, Priestahh FLEX 87 |
| red18 | Red Reserve | 4 | strong | Rated AR 87, Joee SMG 86, Zer0 AR 88, Bance SMG 87 |
| rise18 | Rise Nation | 5-6 | elite | Gunless FLEX 94, TJHaLy SMG 90, SlasheR AR 91, Loony FLEX 88 |
| optic18 | OpTic Gaming | 7-8 | strong | Scump SMG 90, Crimsix AR 89, FormaL AR 89, Octane AR 90 |
| lg18 | Luminosity | 5-6 | strong | John SMG 88, Slacked SMG 85, JKap FLEX 85, Classic FLEX 84 |
| envy18 | Team EnVyUs | 9-12 | mid | Huke SMG 88, Temp FLEX 87, Decemate SMG 84, Classic FLEX 83 |

## 2019 Black Ops 4 Champs Top Pool, 5v5

| ID | Team | Place | Tier | Game Size | Players |
|---|---:|---:|---|---:|---|
| eunited19 | eUnited | 1 | elite | Simp FLEX 97, aBeZy SMG 94, Arcitys FLEX 93, Clayster AR 91, Prestinni SMG 88 |
| 100t19 | 100 Thieves | 2 | elite | Kenny FLEX 95, SlasheR AR 92, Octane AR 93, Enable FLEX 88, Priestahh FLEX 90 |
| optic19 | OpTic Gaming | 3 | strong | Dashy AR 94, Scump SMG 91, Crimsix AR 90, Karma FLEX 89, TJHaLy SMG 87 |
| e6_19 | Enigma6 | 4 | mid | General AR 86, Kismet SMG 85, Frosty FLEX 84, JetLi SMG 82, Decemate SMG 83 |
| units19 | Units | 5-6 | weak | Wailers FLEX 83, Breszy SMG 83, Zed SMG 82, Mayhem FLEX 80, TBC AR 79 |
| rec19 | Team Reciprocity | 5-6 | strong | Dylan SMG 91, Denz AR 86, Seany FLEX 84, Wuskin AR 86, Alexx SMG 85 |
| lg19 | Luminosity | 7-8 | strong | Slacked SMG 86, Classic FLEX 85, John SMG 87, FormaL AR 90, Skyz AR 88 |
| eg19 | Evil Geniuses | 7-8 | mid | Apathy SMG 85, ACHES FLEX 82, SiLLY FLEX 82, Assault AR 83, Lacefield SMG 80 |
| teamwar19 | Team WaR | 9-12 | weak | Insight AR 83, Bance SMG 84, Cammy FLEX 85, Maple SMG 79, TBC FLEX 78 |
| singularity19 | Team Singularity | 9-12 | weak | CleanX SMG 84, MettalZ FLEX 82, Lucky FLEX 82, JurNii SMG 81, TBC AR 79 |
| sicario19 | Sicario Gaming | 9-12 | disaster | TBC AR 80, TBC SMG 79, TBC FLEX 78, TBC SMG 77, TBC FLEX 77 |
| elevate19 | Elevate | 9-12 | mid | Wailers FLEX 83, Skyz AR 88, Brack AR 86, Maux AR 84, MRuiz SMG 81 |

---

# Codex Implementation Notes

When this is approved, Codex should:

1. Replace the current curated `SQUADS` list with this database.
2. Keep `gameSize` even though draft slots remain 4 players.
3. Use only player objects in the `players` array for draft cards, not coaches.
4. Add `tier`, `era`, `placement`, `rosterSnapshot`, and `proof` fields.
5. Add weighted squad drawing by tier.
6. Add balance validation so the rating pool cannot drift back into all-90s nonsense.

Suggested squad object:

```js
{
  id: "sea20",
  org: "Seattle Surge",
  year: 2020,
  game: "Modern Warfare",
  era: "CDL",
  placement: 11,
  tier: "weak",
  gameSize: 5,
  rosterSnapshot: "season/final",
  proof: "source-checked",
  c: { bg: "#06121C", ac: "#00A9E0" },
  players: [
    { n: "Octane", r: 88, role: "AR" },
    { n: "Apathy", r: 80, role: "SMG" },
    { n: "Slacked", r: 79, role: "SMG" },
    { n: "Pandur", r: 78, role: "FLEX" },
    { n: "Proto", r: 78, role: "FLEX" }
  ]
}
```

## Balance Targets

After coding, run a database audit. The game should target:

- Minimum player rating: 76-78.
- Median rating: around 86-88.
- At least 20% of players rated 80-86.
- No more than 35% of players rated 90+.
- Multiple squads with no 90+ player.
- Multiple squads with at least one 79-or-lower player.
- Hard mode should regularly show weak/disaster squads.

## Rating Review Checklist for Matt

When proof-checking, look for:

- Any player obviously too high for that title.
- Any player obviously too low because they had a breakout year.
- Any roster snapshot wrong because the team changed before Champs.
- Any current 2026 roster changes after June 2026.
- Any old Champs roster with `TBC`, which should either be researched or removed.

