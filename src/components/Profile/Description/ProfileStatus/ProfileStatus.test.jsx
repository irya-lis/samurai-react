import React from "react";
import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="iriska-sosiska"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("iriska-sosiska");
    });

});