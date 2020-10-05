import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import {
  startGooglelogin,
  startLoginEmailPassword,
} from "../../../actions/auth";
const { mount } = require("enzyme");
const { LoginScreen } = require("../../../components/auth/LoginScreen");

jest.mock("../../../actions/auth", () => ({
  startGooglelogin: jest.fn(),
  startLoginEmailPassword: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <LoginScreen />
    </MemoryRouter>
  </Provider>
);

describe("Pruebas en <LoginScreen />", () => {
  beforeEach(() => {
    store = mockStore(initState);
    jest.clearAllMocks();
  });

  test("debe de mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de disparar la acción de startGooglelogin ", () => {
    wrapper.find(".google-btn").prop("onClick")();

    expect(startGooglelogin).toHaveBeenCalled();
  });

  test("debe de disparar el startLogin con los respectivos argumentos ", () => {
    wrapper.find("form").prop("onSubmit")({ preventDefault() {} });

    expect(startLoginEmailPassword).toHaveBeenCalledWith(
      "nando@gmail.com",
      "123456"
    );
  });
});
