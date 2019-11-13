import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Card from "../components/card";

let container = null;

beforeEach(() => {
    // setup a DOM element as a render target 

    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting

    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("render user data", async () => {
    const fakeUser = {
        name: {
            first: "Felipe",
            last: "Dunbar"
        },
        email: "felipedunbar@gmail.com"
    };

    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeUser)
        })
    );

    await act(async () => {
        render(<Card user={fakeUser} />, container);
    });

    expect(container.querySelector("h2").textContent).toBe(`${fakeUser.name.first} ${fakeUser.name.last}`);
    expect(container.textContent).toContain(fakeUser.email);

    global.fetch.mockRestore();
});