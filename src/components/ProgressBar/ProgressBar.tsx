import React, { FC } from "react";
import { ProgressBarProps, ProgressStatusText } from "./ProgressBar.types";
import ProgressSection, { ProgressStatusList } from "./ProgressSection";
import { useStyles } from "./styles";

const ProgressBar: FC<ProgressBarProps> = ({ activeSection, progressText, onSectionClick, progressStatus = {} }) => {
  const classes = useStyles();

  const computeProgressStatus = (progressNumber: number, activeSection: number): ProgressStatusText => {
    if (progressNumber < Number(activeSection)) {
      return ProgressStatusList.COMPLETED;
    }
    if (progressNumber === Number(activeSection)) {
      return ProgressStatusList.ACTIVE;
    }
    return ProgressStatusList.IDLE;
  };

  const handleProgressBarStatus = (progressNumber: number, activeSection: number): ProgressStatusText => {
    if (progressNumber === Number(activeSection) && progressStatus[progressNumber] === ProgressStatusList.IDLE) {
      return ProgressStatusList.ACTIVE;
    }
    if (progressStatus[progressNumber]) {
      return progressStatus[progressNumber];
    }
    return computeProgressStatus(progressNumber, activeSection);
  };

  return (
    <div className={classes.tabsContainer}>
      <ul>
        {progressText.map((text, index) => (
          <ProgressSection
            progressNumber={index + 1}
            progressText={text}
            progressStatus={handleProgressBarStatus(index + 1, activeSection)}
            key={text}
            onSectionClick={onSectionClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProgressBar;
