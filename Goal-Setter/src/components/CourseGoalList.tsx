import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App.tsx";
import InfoBox from "./InfoBox.tsx";
import type { ReactNode } from "react";

type CourseGoalListProps = {
  goals: CGoal[]
  onDeleteGoal: (id: number) => void;
};



export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode='hint' >
        No goals found. Maybe add one?
      </InfoBox>
    );
  }

  let warningbox: ReactNode;

  if (goals.length >= 4) {
    warningbox = (
      <InfoBox mode='warning' severity='high'>
        You have many goals! Consider focusing on a few.
      </InfoBox>
    );
  }

  return (
    <>
      {warningbox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );

}