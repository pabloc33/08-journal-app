import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

Enzyme.configure({ adapter: new Adapter() });

const noScroll = () => {};
Object.defineProperty(window, "scrollTo", {
  value: noScroll,
  writable: true,
});
