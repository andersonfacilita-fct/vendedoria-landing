# WhatsApp Vendedor IA Sem Complicação — Landing

Página de vendas (infoproduto low ticket, R$ 67) para a oferta **WhatsApp Vendedor IA Sem Complicação** — Facilita Distribuidora.

- **Stack:** Astro 4 + Tailwind 3 (estático), servido por Express via Docker (Coolify).
- **URL:** https://vendedoria.facilitadistribuidora.com
- **Cores:** paleta oficial WhatsApp / WhatsApp Business (ver `tailwind.config.mjs`).

## Estrutura (12 blocos — método Maxxima PRSA)

1. Oferta / Hero + imagem antes-depois (sem botão de checkout)
2. Ruminação / Problema (P)
3. A perda invisível
4. Rota / esperança (R)
5. Solução — a IA oficial do WhatsApp (S)
6. Como funciona / o que a IA faz
7. O que você recebe + objeção "IA não é pra mim"
8. É a IA oficial / autoridade
9. **Oferta + Botão de venda #1** (Ação)
10. Garantia + FAQ
11. Recap / urgência (antes × depois + FOMO)
12. **CTA final + Botão de venda #2** (Ação)

> Botões de venda aparecem **apenas nos blocos 9 e 12**, por decisão de copy.

## Pendências (preencher antes de subir campanha)

- [ ] Link real do checkout em `src/components/CTAButton.astro` (`CHECKOUT_URL`).
- [ ] Meta Pixel + CAPI no `src/layouts/Layout.astro` (placeholder hoje).
- [ ] (Opcional) Trocar a cena antes/depois (SVG) por foto/IA, se desejado.

## Dev

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm start        # serve dist/ via Express (prod)
```
