import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import DevBlog from "./DevelopmentBlog";
import DevBlogData from '../const/devblogposts';
import { render } from "@testing-library/react";

configure({ adapter: new Adapter() });

describe("Development Blog", () => {
     // check to see if Dev Blog renders
     it("renders correctly", () => {
       shallow(<DevBlog />);
     });

     // check for default display
     it("carousel only display first blogposts", () => {
          const { getByText} = render(<DevBlog />);

          for (const i of DevBlogData) {
     
               if (i.id === 1) {
               const title = getByText(i.title);
               const subtext = getByText(i.subtext);
               expect(title).toBeInTheDocument();
               expect(subtext).toBeInTheDocument();

               } else {
               expect(() => getByText(i.title)).toThrow();
               expect(() => getByText(i.subtext)).toThrow();
               
               }     
          }
     });
}
);