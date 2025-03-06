---
# "Milestone 1: The First Working Prototype"
date: "2025-02-12"
---

## Initial Scope

- The chatbot would take **text-based queries** and return **economic statistics** for a country.
- A **Flask API (`api.py`)** was created to fetch data from the **World Bank API**.
- A **basic query parser** was built using **simple string matching and regex**.

## Early Successes

✅ Users could request **GDP, inflation, population**, and a few other indicators.  
✅ The Flask API successfully handled **GET requests** and returned **parsed JSON data**.

## Problems Identified

❌ **Limited query flexibility**  
- The bot failed if a **country name wasn’t typed exactly** as expected (e.g., *"United States"* worked, but *"USA"* didn’t).

❌ **Hardcoded indicators**  
- The **indicator list** was stored inside the chatbot script, making it **hard to update**.

❌ **Basic error handling**  
- The bot **didn’t account for missing data**, returning empty responses instead of error messages.
