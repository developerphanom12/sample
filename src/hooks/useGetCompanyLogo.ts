import {
  getCompaniesLogoHandler,
  setCompanyLogoHandler,
} from '../services/utils';

export const useGetCompanyLogo = () => {
  const getCompanyLogo = async (data: ICompaniesSwitcher[], token: string) => {
    try {
      const companiesLogo = await getCompaniesLogoHandler(data, token);
      const companiesWithLogo = setCompanyLogoHandler(data, companiesLogo);
      console.log(companiesWithLogo);
      
      return companiesWithLogo;
    } catch (error) {
      console.log(error);
    }
  };
  return getCompanyLogo;
};
