import { useEffect } from 'react';

export const useFavicon = () => {
  const faviconUrl = import.meta.env.VITE_FAVICON_URL;

  useEffect(() => {
    if (faviconUrl && faviconUrl.trim() !== '') {
      // Encontra o elemento link do favicon existente
      let faviconLink = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
      
      // Se não existir, cria um novo
      if (!faviconLink) {
        faviconLink = document.createElement('link');
        faviconLink.rel = 'icon';
        document.head.appendChild(faviconLink);
      }
      
      // Atualiza o href do favicon
      faviconLink.href = faviconUrl;
      
      // Também atualiza o type se necessário
      if (faviconUrl.endsWith('.svg')) {
        faviconLink.type = 'image/svg+xml';
      } else if (faviconUrl.endsWith('.png')) {
        faviconLink.type = 'image/png';
      } else if (faviconUrl.endsWith('.ico')) {
        faviconLink.type = 'image/x-icon';
      }
    }
  }, [faviconUrl]);

  return { faviconUrl };
};