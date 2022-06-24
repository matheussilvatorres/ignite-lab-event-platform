import classNames from 'classnames';
import { CompanyLogo } from './CompanyLogo';

interface FooterProps {
  page: 'event' | 'subscribe';
}

export function Footer(props: FooterProps) {
  return (
    <footer
      className={classNames('w-full pb-6', {
        'bg-gray-700': props.page === 'subscribe',
        'bg-gray-900': props.page === 'event',
        'px-6': props.page === 'subscribe',
        'px-8': props.page === 'event',
      })}
    >
      <div className="w-full flex items-center justify-between border-t-[1px] border-gray-500 pt-6">
        <div className="flex items-center">
          <CompanyLogo />
          <span className="ml-6 text-sm text-gray-300">
            Rocketseat - Todos os direitos reservados
          </span>
        </div>
        <span className="text-sm text-gray-300">Políticas de privacidade</span>
      </div>
    </footer>
  );
}
