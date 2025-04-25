"use server";

export async function modifyCard(formData) {
  let request = "";
  for (const key of formData.keys()) {
    request += "&" + `${key}` + "=" + `${formData.get(key)}`;
  }
  request = request.substring(1);
  request += "&key=data&version=1.0.0.15";

  /*const request1 = new URLSearchParams(formData).toString();
  console.log(request1);*/

  let headers = new Headers();
  headers.append("Host", "api.gwent.one");
  headers.append("Content-Type", "x-www-form-urlencoded");
  headers.append("Content-Length", request.length.toString());

  const init = {
    method: "POST",
    headers: {
      Host: "api.gwent.one",
    },
  };
  const response = fetch("https://api.gwent.one/", init).then(async function (
    response
  ) {
    if (!response.ok) {
      throw new Error(`erreur HTTP! statut: ${response.status}`);
    }
    const data = await response.text();
    console.log(data);
  });
}
