const createQueryString = ({
  q,
  limit,
  skip,
}: {
  q: string;
  limit: number;
  skip: number;
}) => {
  let str = "?";
  if (q) str = "/search?q=" + q + "&";
  if (limit > 0) str = str + "limit=" + limit + "&";
  if (skip > 0) str = str + "skip=" + skip + "&";
  return str;
};
export default createQueryString;
