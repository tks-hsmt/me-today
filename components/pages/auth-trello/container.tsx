import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthTrelloComponent } from '.';
import { useTrelloStore } from '../../../store';

export const AuthTrelloContainer: React.FC = () => {
  const { setToken, setKey } = useTrelloStore();
  const router = useRouter();

  const handleFinish = (apiKey: string) => {
    setKey(apiKey);
    const baseUrl = 'https://trello.com/1/authorize';
    const name = 'MeToday';
    const expiration = 'never';
    const responseType = 'token';
    const scope = 'read,write';
    const returnUrl = 'http://localhost:3000/auth-trello';
    window.location.href = encodeURI(`${baseUrl}?key=${apiKey}&name=${name}&expiration=${expiration}&response_type=${responseType}&scope=${scope}&return_url=${returnUrl}`);
  }

  useEffect(() => {
    const regexToken = /[&#]?token=([0-9a-f]{64})/;
    const match = regexToken.exec(location.hash);
    if (match) {
      setToken(match[1]);
      // TODO Trello認証後のリダイレクト時に1度エラーになり、その後Topページに遷移する動きになる
      //      原因と対処は後で調べる
      router.push('/');
    }
  });

  return <AuthTrelloComponent handleFinish={handleFinish} />
}