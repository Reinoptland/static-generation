export async function getYears() {
  const response = await fetch("https://ignoble-api.onrender.com/years");
  const data = await response.json();
  return data.years;
}

export async function getPrizesByYear(year) {
  const response = await fetch(
    `https://ignoble-api.onrender.com/years/${year}/prizes`
  );
  const data = await response.json();
  return data.prizes;
}
