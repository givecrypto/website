import * as React from "react";
import chroma from "chroma-js";
import {
  YAxis,
  XAxis,
  VerticalGridLines,
  XYPlot,
  HorizontalBarSeries,
  Hint,
} from "react-vis";
import { colors } from "../../../design-system";
import { isEmpty } from "lodash";
import {
  totalParticipants,
  householdHorizontalBar,
} from "../../../content/ambassadors-report/metrics";
import useMeasure from "../../../utils/useMeasure";
import Heading from "../components/Heading";
import Tip from "../../../components/Tip";

interface Props {}

const HouseholdHorizontalBar: React.FC<Props> = () => {
  const ref = React.useRef();
  const { width } = useMeasure(ref);
  const [value, setValue]: any = React.useState({});

  // ? I ran into lots of weirdness here with React-Vis where the values returned by the component
  // ? are flashing- which lead me down a trail of making this thing more performant.
  const memoizedTotal = React.useMemo(
    () => (isEmpty(value) ? 0 : Math.floor(value.x.toFixed(0))),
    [value],
  );
  const memoizedPercentage = React.useMemo(
    () =>
      isEmpty(value)
        ? 0
        : `${((value.x / totalParticipants) * 100).toFixed(2)}%`,
    [value],
  );

  const dataWithColors = (data: any) =>
    React.useMemo(() => {
      // Get the color for each item
      const getColor = (index: number) => {
        const colorScale = chroma
          .scale([colors.blueDark, colors.red])
          .mode("rgb")
          .colors(data.length);

        if (isEmpty(value)) {
          return colorScale[index];
        } else {
          return index === data.findIndex(a => a.y === value.y)
            ? chroma.mix(colorScale[index], colors.coldWater).css()
            : colorScale[index];
        }
      };

      // Return the item and inject the correct color
      return data.slice().map((item: any, index: number) => ({
        ...item,
        color: getColor(index),
      }));
    }, [value]);

  const memoizedValue: any = React.useMemo(
    () =>
      isEmpty(value)
        ? {}
        : {
            data: value,
            title: householdHorizontalBar.find(item => item.y === value.y).y,
            metrics: [
              {
                label: "Total",
                value: memoizedTotal,
              },
              {
                label: "Percentage",
                value: memoizedPercentage,
              },
            ],
          },
    [value],
  );

  return (
    <div
      ref={ref}
      className="pv4"
      onMouseOut={() => {
        setValue({});
      }}
    >
      <Heading>Household Size</Heading>
      <XYPlot
        yType="ordinal"
        height={475}
        width={width}
        xDistance={100}
        style={{
          overflow: "visible",
        }}
      >
        <VerticalGridLines />
        <XAxis />
        <YAxis />
        <HorizontalBarSeries
          colorType="literal"
          animation={{ damping: 14, stiffness: 100 }}
          barWidth={0.6}
          data={dataWithColors(householdHorizontalBar)}
          style={{}}
          onValueMouseOver={(v: any) => {
            setValue(v);
          }}
        />
        {!isEmpty(memoizedValue) && (
          <Hint value={memoizedValue.data}>
            <Tip title={memoizedValue.title} metrics={memoizedValue.metrics} />
          </Hint>
        )}
      </XYPlot>
    </div>
  );
};

export default HouseholdHorizontalBar;
