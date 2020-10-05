import cloudinary from "cloudinary";
const { fileUpload } = require("../../helpers/fileUpload");

cloudinary.config({
  cloud_name: "dicig6m75",
  api_key: "149155235419795",
  api_secret: "NMvlc6dtgqkUX89mlvs9f8MFpcY",
});

describe("Pruebas en fileUpload", () => {
  test("debe de cargar un archivo  y retornar el URL ", async (done) => {
    const resp = await fetch(
      "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
    );

    const blob = await resp.blob();

    const file = new File([blob], "foto.png");

    const url = await fileUpload(file);

    expect(typeof url).toBe("string");

    //Borrar imagen ID
    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".png", "");

    cloudinary.v2.api.delete_resources(imageId, {}, () => {
      done();
    });
  });

  test("debe de retornar un error ", async () => {
    const file = new File([], "foto.png");

    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
