import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Logo } from '../components/Logo';
import { ReactIcon } from '../components/ReactIcon';
import { useCreateSubscriberMutation } from '../graphql/generated';

import codeMockUpImg from '../assets/code-mockup.png';

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate('/event');
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center relative">
      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 -z-0">
        <ReactIcon />
      </div>

      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto z-10">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{' '}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React JS</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form
            className="flex flex-col gap-2 w-full"
            onSubmit={handleSubscribe}
          >
            <input
              className="bg-gray-900 rounded px-5 h-14 hover:outline-none focus:outline-none hover:outline-green-300 focus:outline-green-300 invalid:outline-red-500 focus:invalid:outline-red-500"
              type="text"
              placeholder="Seu nome completo"
              required
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14 hover:outline-none focus:outline-none hover:outline-green-300 focus:outline-green-300 invalid:outline-red-500 focus:invalid:outline-red-500"
              type="email"
              placeholder="Digite seu e-mail"
              required
              onChange={(event) => setEmail(event.target.value)}
            />

            <button
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              disabled={loading}
              type="submit"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src={codeMockUpImg} className="mt-10" alt="" />

      <Footer page="subscribe" />
    </div>
  );
}
