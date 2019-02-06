import glamorous from "glamorous";
import Router from "next/router";
import * as React from "react";
import Wrapper from "../components/Wrapper";
import { colors } from "../design-system";
import { Step } from "../utils/Scale";
import { setCookie } from "../utils/session";

const Container = glamorous.div({});
const Input = glamorous.input({
  fontWeight: 100,
  textAlign: "center",
  border: "none",
  color: colors.black,
  paddingBottom: Step(3),
  borderBottom: `1px solid transparent`,
  "&::placeholder": {
    opacity: 1,
    transition: "all 200ms",
    transform: "scale(1)",
    fontWeight: 100,
  },
  "&:focus": {
    outline: "none",
    borderBottom: `1px solid ${colors.black}`,
    "&::placeholder": {
      opacity: 0,
      transform: "scale(0.9)",
    },
  },
});

export default class Authenticate extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(event) {
    const password = event.target.value;

    if (password === `${process.env.PASSWORD}`) {
      localStorage.setItem("password", password);
      setCookie("password", password);
      // window.location.href = 'https://github.com/?auth=true';
      Router.replace("/").then(() => window.scrollTo(0, 0));
    }
  }

  public render() {
    return (
      <Wrapper>
        <Container className="vh-75 dt w-100 tc center">
          <div className="v-mid dtc">
            <Input
              type="password"
              placeholder="What's the password?"
              onChange={this.handleChange}
            />
          </div>
        </Container>
      </Wrapper>
    );
  }
}
