import { useEffect, useState } from 'react';

/* NOTE
 カレンダーをマウント後にレンダリングをしなければ、ssrとcsrの挙動の違いで、
 - firefoxでtableが崩れる。
 - 日本語の読み込み時のエラーがでる
 等が発生するためにこの関数を使う。
  */
const useIsAfterSsr = (): boolean => {
  const [isAfterSsr, setIsAfterSsr] = useState<boolean>(false);

  useEffect(() => {
    if (process.browser) {
      setIsAfterSsr(true);
    }
  }, []);
  return isAfterSsr;
};

export default useIsAfterSsr;
