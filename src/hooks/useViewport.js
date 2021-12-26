import Context from 'src/context/context';
import { useContext } from 'react';

const useViewport = () => {
  const { width} = useContext(Context);
  return { width};
};

export default useViewport;
