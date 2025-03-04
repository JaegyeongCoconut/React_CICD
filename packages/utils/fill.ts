export const fillCheckboxSVG = (color: string) => {
  const svgPrefix =
    "data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='16' height='16' rx='2' fill='%23";
  const colorWithoutHash = color.replace("#", "");
  const svgSuffix =
    "' /%3E%3Cpath d='M6.83845 10.2335L12.8844 4.19208C13.1407 3.93597 13.5548 3.93597 13.8111 4.19208C14.0674 4.44818 14.0674 4.86189 13.8111 5.118L7.77163 11.1594L6.98959 11.9409C6.91073 12.0197 6.77273 12.0197 6.69387 11.9409L5.91183 11.1594L2.19222 7.44264C1.93593 7.18654 1.93593 6.77283 2.19222 6.51672C2.44852 6.26062 2.86254 6.26062 3.11884 6.51672L6.83845 10.2335Z' fill='white'/%3E%3C/svg%3E%0A";

  return '"' + svgPrefix + colorWithoutHash + svgSuffix + '"';
};
