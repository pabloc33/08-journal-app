const { authReducer } = require("../../reducers/authReducer");
const { types } = require("../../types/types");

describe("Pruebas en authReducer", () => {
  test("debe de realizar el login ", () => {
    const initState = {};

    const action = {
      type: types.login,
      payload: {
        uid: "abc",
        displayName: "Pablo",
      },
    };

    const state = authReducer(initState, action);

    expect(state).toEqual({
      uid: "abc",
      name: "Pablo",
    });
  });

  test("debe de realizar el logout ", () => {
    const initState = {
      uid: "klhahlhgahlkdfkhf",
      name: "Pablo",
    };

    const action = {
      type: types.logout,
    };

    const state = authReducer(initState, action);

    expect(state).toEqual({});
  });

  test("no debe de hacer cambios en el state ", () => {
    const initState = {
      uid: "klhahlhgahlkdfkhf",
      name: "Pablo",
    };

    const action = {
      type: "jkhsdfhd",
    };

    const state = authReducer(initState, action);

    expect(state).toEqual(initState);
  });
});
