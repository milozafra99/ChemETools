// chemeng-units.js
// Shared units and conversion helpers for all ChemEng Tools calculators.

// ---------- CENTRAL DATA ----------

const UnitData = {
  Length: {
    base: "meter",
    units: {
      m:   { label: "meter (m)",           factor: 1 },
      cm:  { label: "centimeter (cm)",     factor: 0.01 },
      mm:  { label: "millimeter (mm)",     factor: 0.001 },
      km:  { label: "kilometer (km)",      factor: 1000 },
      in:  { label: "inch (in)",           factor: 0.0254 },
      ft:  { label: "foot (ft)",           factor: 0.3048 },
      yd:  { label: "yard (yd)",           factor: 0.9144 },
      mi:  { label: "mile (mi)",           factor: 1609.344 }
    }
  },

  "Amount of Substance": {
    base: "mole",
    units: {
      mol:   { label: "mole (mol)",           factor: 1 },
      kmol:  { label: "kilomole (kmol)",      factor: 1000 },
      mmol:  { label: "millimole (mmol)",     factor: 0.001 },
      lbmol: { label: "pound-mole (lbmol)",   factor: 453.59237 }
    }
  },
  
  Mass: {
    base: "kilogram",
    units: {
      kg:  { label: "kilogram (kg)",   factor: 1 },
      g:   { label: "gram (g)",        factor: 0.001 },
      mg:  { label: "milligram (mg)",  factor: 0.000001 },
      lb:  { label: "pound (lbm)",     factor: 0.45359237 },
      oz:  { label: "ounce (oz)",      factor: 0.028349523125 },
      ton: { label: "metric ton (t)",  factor: 1000 }
    }
  },

  Volume: {
    base: "cubic meter",
    units: {
      "m3":   { label: "cubic meter (m³)",   factor: 1 },
      L:      { label: "liter (L)",          factor: 0.001 },
      mL:     { label: "milliliter (mL)",    factor: 0.000001 },
      ft3:    { label: "cubic foot (ft³)",   factor: 0.028316846592 },
      in3:    { label: "cubic inch (in³)",   factor: 0.000016387064 },
      galUS:  { label: "US gallon (gal)",    factor: 0.003785411784 },
      qtUS:   { label: "US quart (qt)",      factor: 0.000946352946 }
    }
  },

  Area: {
    base: "square meter",
    units: {
      m2:  { label: "square meter (m²)",       factor: 1 },
      cm2: { label: "square centimeter (cm²)", factor: 0.0001 },
      mm2: { label: "square millimeter (mm²)", factor: 0.000001 },
      ft2: { label: "square foot (ft²)",       factor: 0.09290304 },
      in2: { label: "square inch (in²)",       factor: 0.00064516 },
      ha:  { label: "hectare (ha)",            factor: 10000 }
    }
  },

  Time: {
    base: "second",
    units: {
      s:   { label: "second (s)",   factor: 1 },
      min: { label: "minute (min)", factor: 60 },
      h:   { label: "hour (h)",     factor: 3600 },
      day: { label: "day",          factor: 86400 }
    }
  },

  "Velocity, Speed": {
    base: "meter per second",
    units: {
      "m/s":  { label: "meter per second (m/s)",    factor: 1 },
      "km/h": { label: "kilometer per hour (km/h)", factor: 1000 / 3600 },
      "ft/s": { label: "foot per second (ft/s)",    factor: 0.3048 },
      mph:    { label: "mile per hour (mph)",       factor: 1609.344 / 3600 }
    }
  },

  Acceleration: {
    base: "meter per second squared",
    units: {
      "m/s2":  { label: "meter per second² (m/s²)", factor: 1 },
      "ft/s2": { label: "foot per second² (ft/s²)", factor: 0.3048 },
      g:       { label: "standard gravity (g)",     factor: 9.80665 }
    }
  },

  "Energy, Work": {
    base: "joule",
    units: {
      J:    { label: "joule (J)",           factor: 1 },
      kJ:   { label: "kilojoule (kJ)",      factor: 1000 },
      Wh:   { label: "watt-hour (Wh)",      factor: 3600 },
      kWh:  { label: "kilowatt-hour (kWh)", factor: 3_600_000 },
      cal:  { label: "calorie (cal)",       factor: 4.184 },
      kcal: { label: "kilocalorie (kcal)",  factor: 4184 },
      Btu:  { label: "Btu (IT)",            factor: 1055.05585262 }
    }
  },

  "Heat Capacity, Entropy": {
    base: "joule per kilogram kelvin",
    units: {
      "J/(kg·K)":     { label: "J/(kg·K)",     factor: 1 },
      "kJ/(kg·K)":    { label: "kJ/(kg·K)",    factor: 1000 },
      "cal/(kg·K)":   { label: "cal/(kg·K)",   factor: 4.184 },
      "kcal/(kg·K)":  { label: "kcal/(kg·K)",  factor: 4184 },
      "Btu/(lb·°F)":  { label: "Btu/(lbm·°F)", factor: 4186.8 },
      "Btu/(lb·R)":   { label: "Btu/(lbm·R)",  factor: 4186.8 }
    }
  },

  "Heat Conductivity": {
    base: "watt per meter kelvin",
    units: {
      "W/(m·K)":       { label: "W/(m·K)",       factor: 1 },
      "kW/(m·K)":      { label: "kW/(m·K)",      factor: 1000 },
      "Btu/(h·ft·°F)": { label: "Btu/(h·ft·°F)", factor: 1.730735 }
    }
  },

  "Heat Resistance, Fouling": {
    base: "square meter kelvin per watt",
    units: {
      "m2·K/W":       { label: "m²·K/W",       factor: 1 },
      "ft2·h·°F/Btu": { label: "ft²·h·°F/Btu", factor: 0.1761101838 }
    }
  },

  "Heat Transfer": {
    base: "watt per square meter kelvin",
    units: {
      "W/(m2·K)":       { label: "W/(m²·K)",       factor: 1 },
      "kW/(m2·K)":      { label: "kW/(m²·K)",      factor: 1000 },
      "Btu/(h·ft2·°F)": { label: "Btu/(h·ft²·°F)", factor: 5.678263 }
    }
  },

  "Heat Transfer, Radiation": {
    base: "watt per square meter",
    units: {
      "W/m2":        { label: "W/m²",        factor: 1 },
      "kW/m2":       { label: "kW/m²",       factor: 1000 },
      "Btu/(h·ft2)": { label: "Btu/(h·ft²)", factor: 3.15459 // W/m² }
    }
  },

  "Heat Exchanged, Enthalpy": {
    base: "joule per kilogram",
    units: {
      "J/kg":   { label: "J/kg", factor: 1 },
      "kJ/kg":  { label: "kJ/kg", factor: 1000 },
      "cal/kg":  { label: "cal/kg", factor: 4.184 },
      "kcal/kg":  { label: "kcal/kg", factor: 4184 },
      "Btu/lb": { label: "Btu/lbm", factor: 1055.05585262 / 0.45359237 }
    }
  },

  "Power, Heat Flow, Duty": {
    base: "watt",
    units: {
      W:       { label: "watt (W)",             factor: 1 },
      kW:      { label: "kilowatt (kW)",        factor: 1000 },
      MW:      { label: "megawatt (MW)",        factor: 1_000_000 },
      hp:      { label: "horsepower (hp)",      factor: 745.699872 },
      "Btu/h": { label: "Btu per hour (Btu/h)", factor: 1055.05585262 / 3600 }
    }
  },

  Density: {
    base: "kilogram per cubic meter",
    units: {
      "kg/m3":  { label: "kg/m³",   factor: 1 },
      "g/cm3":  { label: "g/cm³",   factor: 1000 },
      "lb/ft3": { label: "lbm/ft³", factor: 16.01846337396 }
    }
  },

  "Surface Density": {
    base: "kilogram per square meter",
    units: {
      "kg/m2": { label: "kg/m²", factor: 1 },
      "g/cm2": { label: "g/cm²", factor: 10 },
      "lb/ft2":{ label: "lbm/ft²",factor: 4.88242763638 }
    }
  },

  "Surface Tension": {
    base: "newton per meter",
    units: {
      "N/m":  { label: "N/m",  factor: 1 },
      "mN/m": { label: "mN/m", factor: 0.001 },
      "dyne/cm": { label: "dyne/cm", factor: 0.001 }
    }
  },

  "Viscosity (Dynamic)": {
    base: "pascal second",
    units: {
      "Pa·s": { label: "Pa·s", factor: 1 },
      "mPa·s":{ label: "mPa·s", factor: 0.001 },
      cP:     { label: "centipoise (cP)", factor: 0.001 }
    }
  },

  "Viscosity (Kinematic)": {
    base: "square meter per second",
    units: {
      "m2/s": { label: "m²/s", factor: 1 },
      cSt:    { label: "centistokes (cSt)", factor: 1e-6 }
    }
  },

  "Mass Flow": {
    base: "kilogram per second",
    units: {
      "kg/s": { label: "kg/s", factor: 1 },
      "kg/h": { label: "kg/h", factor: 1 / 3600 },
      "lb/s": { label: "lbm/s", factor: 0.45359237 },
      "lb/h": { label: "lbm/h", factor: 0.45359237 / 3600 }
    }
  },

  "Volume Flow": {
    base: "cubic meter per second",
    units: {
      "m3/s":     { label: "m³/s", factor: 1 },
      "m3/h":     { label: "m³/h", factor: 1 / 3600 },
      "L/s":      { label: "L/s",  factor: 0.001 },
      "L/min":    { label: "L/min",factor: 0.001 / 60 },
      gpm:        { label: "US gal/min (gpm)", factor: 0.003785411784 / 60 },
      "US gal/min": { label: "US gal/min", factor: 0.003785411784 / 60 } // alias
    }
  },

  Force: {
    base: "newton",
    units: {
      N:  { label: "newton (N)",        factor: 1 },
      kN: { label: "kilonewton (kN)",   factor: 1000 },
      lbf:{ label: "pound‑force (lbf)", factor: 4.4482216152605 }
    }
  },

  // Pressure: base is kPa absolute; each unit has factor-to-kPa and kind A/G.
  Pressure: {
    base: "kilopascal absolute",
    units: {
      "Pa (A)":  { label: "Pa (A)",  factor: 0.001,            kind: "A" },
      "Pa (G)":  { label: "Pa (G)",  factor: 0.001,            kind: "G" },

      "kPa (A)": { label: "kPa (A)", factor: 1,                kind: "A" },
      "kPa (G)": { label: "kPa (G)", factor: 1,                kind: "G" },

      "MPa (A)": { label: "MPa (A)", factor: 1000,             kind: "A" },
      "MPa (G)": { label: "MPa (G)", factor: 1000,             kind: "G" },

      "bar (A)": { label: "bar (A)", factor: 100,              kind: "A" },
      "bar (G)": { label: "bar (G)", factor: 100,              kind: "G" },

      "atm (A)": { label: "atm (A)", factor: 101.325,          kind: "A" },
      "atm (G)": { label: "atm (G)", factor: 101.325,          kind: "G" },

      "psi (A)": { label: "psi (A)", factor: 6.894757293168,   kind: "A" },
      "psi (G)": { label: "psi (G)", factor: 6.894757293168,   kind: "G" }
    }
  },

  "Pressure Drop / Length": { //Pdrop is always absolute
    base: "kilopascal per 100 meters",
    units: {
      "Pa / 100m":   { label: "Pa / 100m",   factor: 0.001 },
      "kPa / 100m":  { label: "kPa / 100m",  factor: 1 },
      "MPa / 100m":  { label: "MPa / 100m",  factor: 1000 },
      "bar / 100m":  { label: "bar / 100m",  factor: 100 },
      "psi / 100m":  { label: "psi / 100m",  factor: 6.894757293168 },
      "psi / 100ft": { label: "psi / 100ft", factor: 6.894757293168 / 0.3048 }
    }
  },
    
  Light: {
    base: "lux",
    units: {
      lx:      { label: "lux (lx)",             factor: 1 },
      "lm/m2": { label: "lumen per m² (lm/m²)", factor: 1 },
      fc:      { label: "foot‑candle (fc)",     factor: 10.76391041671 }
    }
  },

  Angle: {
    base: "radian",
    units: {
      rad: { label: "radian (rad)", factor: 1 },
      deg: { label: "degree (°)",  factor: Math.PI / 180 },
      grad:{ label: "gradian (gon)", factor: Math.PI / 200 }
    }
  },

  "Temperature Difference": {
    base: "kelvin difference",
    units: {
      K:  { label: "kelvin (K)",  factor: 1 },
      C:  { label: "degree Celsius (°C)", factor: 1 },
      F:  { label: "degree Fahrenheit (°F)", factor: 5 / 9 },
      R:  { label: "Rankine (R)", factor: 5 / 9 }
    }
  }
};

// Absolute temperature units handled separately
const TemperatureUnits = ["°C", "°F", "K", "R"];

const UnitCategoryList = [
  "Acceleration",
  "Amount of Substance",
  "Angle",
  "Area",
  "Density",
  "Energy, Work",
  "Force",
  "Heat Capacity, Entropy",
  "Heat Conductivity",
  "Heat Exchanged, Enthalpy",
  "Heat Transfer, Radiation",
  "Heat Resistance, Fouling",
  "Heat Transfer",
  "Length",
  "Light",
  "Mass",
  "Mass Flow",
  "Power, Heat Flow, Duty",
  "Pressure",
  "Pressure Drop / Length", 
  "Surface Density",
  "Surface Tension",
  "Temperature",
  "Temperature Difference",
  "Time",
  "Velocity, Speed",
  "Viscosity (Dynamic)",
  "Viscosity (Kinematic)",
  "Volume",
  "Volume Flow"
];

const ATM_KPA = 101.325;

// ---------- HELPERS FOR UI (DROPDOWNS) ----------

function getUnitCategories() {
  return UnitCategoryList.slice();
}

function getUnitsForCategory(category) {
  if (category === "Temperature") {
    return TemperatureUnits.map(u => ({ key: u, label: u }));
  }
  const cat = UnitData[category];
  if (!cat) return [];
  return Object.entries(cat.units).map(([key, def]) => ({
    key,
    label: def.label
  }));
}

// ---------- special conversions ----------

function convertTemperature(value, from, to) {
  let K;
  if (from === "°C") K = value + 273.15;
  else if (from === "°F") K = (value - 32) * 5 / 9 + 273.15;
  else if (from === "K")  K = value;
  else if (from === "R") K = value * 5 / 9;
  else throw new Error("Unknown temperature unit");

  if (to === "°C") return K - 273.15;
  if (to === "°F") return (K - 273.15) * 9 / 5 + 32;
  if (to === "K")  return K;
  if (to === "R") return K * 9 / 5;
  throw new Error("Unknown temperature unit");
}

function convertPressure(value, fromKey, toKey) {
  const units = UnitData.Pressure.units;
  const from = units[fromKey];
  const to = units[toKey];
  if (!from || !to) throw new Error("Unsupported pressure unit");

  // to absolute kPa
  let kPa = value * from.factor;
  const absKPa = from.kind === "G" ? kPa + ATM_KPA : kPa;

  // to target
  if (to.kind === "G") {
    const gageKPa = absKPa - ATM_KPA;
    return gageKPa / to.factor;
  }
  return absKPa / to.factor;
}

function convertLinear(category, value, fromKey, toKey) {
  const cat = UnitData[category];
  if (!cat || !cat.units[fromKey] || !cat.units[toKey]) {
    throw new Error("Unsupported unit for " + category);
  }
  const from = cat.units[fromKey];
  const to = cat.units[toKey];
  const valueInBase = value * from.factor;
  return valueInBase / to.factor;
}

function convertUnits(category, value, fromKey, toKey) {
  if (category === "Temperature") {
    return convertTemperature(value, fromKey, toKey);
  }
  if (category === "Pressure") {
    return convertPressure(value, fromKey, toKey);
  }
  return convertLinear(category, value, fromKey, toKey);
}
