import React from "react";

import { theme } from "app/theme";
import { Icon } from "components/Icons/Icons";

import { NavigationButtonStyles } from "./NavigationButton.style";

export type NavigationButtonProps = {
  iconBehavior?: "iconPrevious" | "iconNext" | "iconBack" | "iconForward";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  themedButton: "navigation" | "pagination" | "current";
};

export const NavigationButton = ({
  themedButton,
  children,
  onClick,
  iconBehavior,
}: NavigationButtonProps) => {
  return (
    <NavigationButtonStyles.Button
      themedButton={themedButton}
      onClick={onClick}
    >
      <NavigationButtonStyles.Content>
        {iconBehavior === "iconPrevious" && themedButton === "navigation" && (
          <Icon type="arrowLeft" fill={theme.colors.halfTranparentBlack} />
        )}
        {iconBehavior === "iconBack" && themedButton === "navigation" && (
          <>
            <Icon type="arrowLeft" fill={theme.colors.halfTranparentBlack} />
            <Icon type="arrowLeft" fill={theme.colors.halfTranparentBlack} />
          </>
        )}
      </NavigationButtonStyles.Content>
      <NavigationButtonStyles.Content>
        {iconBehavior === "iconPrevious" && themedButton === "pagination" && (
          <Icon type="arrowLeft" fill={theme.colors.black} />
        )}
        {iconBehavior === "iconBack" && themedButton === "pagination" && (
          <>
            <Icon type="arrowLeft" fill={theme.colors.black} />
            <Icon type="arrowLeft" fill={theme.colors.black} />
          </>
        )}
      </NavigationButtonStyles.Content>
      <NavigationButtonStyles.Content>
        {children}
      </NavigationButtonStyles.Content>

      <NavigationButtonStyles.Content>
        {iconBehavior === "iconNext" && themedButton === "navigation" && (
          <Icon type="arrowRight" fill={theme.colors.halfTranparentBlack} />
        )}
        {iconBehavior === "iconForward" && themedButton === "navigation" && (
          <>
            <Icon type="arrowRight" fill={theme.colors.halfTranparentBlack} />
            <Icon type="arrowRight" fill={theme.colors.halfTranparentBlack} />
          </>
        )}
      </NavigationButtonStyles.Content>
      <NavigationButtonStyles.Content>
        {iconBehavior === "iconNext" && themedButton === "pagination" && (
          <Icon type="arrowRight" fill={theme.colors.black} />
        )}
        {iconBehavior === "iconForward" && themedButton === "pagination" && (
          <>
            <Icon type="arrowRight" fill={theme.colors.black} />
            <Icon type="arrowRight" fill={theme.colors.black} />
          </>
        )}
      </NavigationButtonStyles.Content>
    </NavigationButtonStyles.Button>
  );
};
