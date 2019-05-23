import glamorous from "glamorous";
import * as React from "react";
import content from "../content/home/team";
import { breakpoints, colors } from "../design-system";
import { toGlobalId } from "../utils/globalId";
import { Step } from "../utils/Scale";
import PersonCard from "./PersonCard";

const Container = glamorous.section({
  marginBottom: Step(5),
  [breakpoints.ns]: {
    marginBottom: Step(8),
  },
});

const Title = glamorous.h2({
  fontSize: Step(6),
  textAlign: "center",
  paddingBottom: Step(5),
  color: colors.black,
});

const TeamSection: React.SFC = () => (
  <Container>
    <Title>{content.title}</Title>
    <div className="flex flex-wrap items-top justify-between">
      {content.people.map(({ name, role, bio, filename }, index) => (
        <div
          key={toGlobalId({ type: "TeamMember", id: name })}
          className={`w-100 w-${content.people.length === 2 ? 40 : 30}-ns`}
        >
          <PersonCard
            name={name}
            role={role}
            filename={filename}
            pattern={
              index === 0
                ? "left"
                : index === content.people.length - 1
                  ? "right"
                  : null
            }
            bio={bio}
          />
        </div>
      ))}
    </div>
  </Container>
);

export default TeamSection;
