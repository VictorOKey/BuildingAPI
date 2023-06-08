import {cleanup} from "@testing-library/react";
import renderer from "react-test-renderer";
import ObjectItem from "../../ObjectItem/ObjectItem";
import "@testing-library/jest-dom"

afterEach(() => {
    cleanup();
})

test("should render ObjectItem component", () => {
    const component = renderer.create(<ObjectItem/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})
