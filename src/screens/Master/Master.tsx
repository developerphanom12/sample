import React from "react";

import { UnderDevelop } from '../underDevelop/UnderDevelop';
import { useMasterState } from "./Master.state";
import { MasterStyles as Styled } from "./Master.style";
import { CategoriesTab } from "./CategoriesTab";
import { TypesTab } from "./TypesTab/TypesTab";
import { SupliersTab } from "./SupliersTab/SupliersTab";

import { MASTER_TABS } from "constants/header-links";

export const Master: React.FC = () => {
	const activeTabName = useMasterState();
	return (
		<Styled.Section>
			<Styled.ContentWrapper>
				{activeTabName === MASTER_TABS[0] ? (
					<Styled.TabContent>
						<UnderDevelop />
					</Styled.TabContent>
				) : activeTabName === MASTER_TABS[1] ? (
					<Styled.TabContent>
						<SupliersTab />
					</Styled.TabContent>
				) : activeTabName === MASTER_TABS[2] ? (
					<Styled.TabContent>
						<CategoriesTab />
					</Styled.TabContent>
				) : activeTabName === MASTER_TABS[3] ? (
					<Styled.TabContent>
						<UnderDevelop />
					</Styled.TabContent>
				) : activeTabName === MASTER_TABS[4] ? (
					<Styled.TabContent>
						<UnderDevelop />
					</Styled.TabContent>
				) : activeTabName === MASTER_TABS[5] ? (
					<Styled.TabContent>
						<TypesTab />
					</Styled.TabContent>
				) : (
					<Styled.TabContent>
						<TypesTab />
					</Styled.TabContent>
				)}
			</Styled.ContentWrapper>
		</Styled.Section>
	);
};
