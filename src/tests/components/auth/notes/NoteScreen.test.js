import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import "@testing-library/jest-dom";
import { Sidebar } from "../../../../components/journal/Sidebar";
import { activeNotes } from "../../../../actions/notes";
import { NoteScreen } from "../../../../notes/NoteScreen";
const { mount } = require("enzyme");

jest.mock("../../../../actions/notes", () => ({
  activeNotes: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: "1",
    name: "Pablo",
  },
  ui: {
    loading: false,
    msgError: null,
  },
  notes: {
    active: {
      id: 1234,
      title: "Hola",
      body: "mundo",
      date: 0,
    },
    notes: [],
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <NoteScreen />
  </Provider>
);

describe("Pruebas en el <NoteScreen />", () => {
  test("debe de mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de disparar el active note ", () => {
    wrapper.find('input[name="title"]').simulate("change", {
      target: {
        name: "title",
        value: "Hola de nuevo",
      },
    });

    expect(activeNotes).toHaveBeenLastCalledWith(1234, {
      body: "mundo",
      title: "Hola de nuevo",
      id: 1234,
      date: 0,
    });
  });
});
