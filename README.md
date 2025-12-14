---

## 📌 Visão Geral

O **robson-next-portfolio** é um portfólio pessoal desenvolvido com **Next.js (App Router)**, **TypeScript**, **Tailwind CSS** e **Framer Motion**, focado em desempenho, acessibilidade, SEO e uma experiência visual elegante.

Ele foi pensado para ser simples de manter, escalável e alinhado às boas práticas do ecossistema React/Next.

---

## 🧱 Estrutura da Página Inicial

A página principal (`Home`) é composta por seções bem definidas, cada uma representando uma parte essencial da apresentação profissional:

```tsx
export default function Home() {
  return (
    <>
      <AboutHeroSplit />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactHeroSplit />
    </>
  );
}
```

Cada componente é isolado, reutilizável e responsável por uma única função.

---

## 🧩 Seções do Portfólio

### 👋 AboutHeroSplit

Seção de introdução e apresentação pessoal.

**Objetivo:**

* Apresentar quem você é
* Destacar seu papel profissional
* Criar uma primeira impressão forte

Inclui animações suaves, tipografia clara e layout dividido para melhor hierarquia visual.

---

### 🛠️ SkillsSection

Exibe suas principais habilidades técnicas.

**Características:**

* Lista de tecnologias e competências
* Ícones representativos
* Layout responsivo em grid

Essa seção reforça seu domínio técnico de forma rápida e visual.

---

### 🚀 ProjectsSection

Mostra projetos relevantes desenvolvidos.

**Cada projeto inclui:**

* Nome
* Descrição curta
* Tecnologias utilizadas
* Links para repositório e/ou demonstração

Ideal para demonstrar experiência prática e qualidade de código.

---

### 🎓 CertificatesSection

Reúne certificados e formações relevantes.

**Conteúdo típico:**

* Nome do curso
* Instituição
* Breve descrição
* Link público para o certificado

Essa seção evidencia aprendizado contínuo e evolução profissional.

---

### 📬 ContactHeroSplit

Seção final focada em contato.

**Função:**

* Facilitar o primeiro contato
* Direcionar para redes sociais ou e-mail
* Encerrar a navegação com um call to action claro

---

## 🧪 Tecnologias Utilizadas

* **Next.js (App Router)**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Framer Motion**

---

## ⚙️ Como Rodar o Projeto Localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/robson-next-portfolio.git

# Entre na pasta do projeto
cd robson-next-portfolio

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse em: `http://localhost:3000`

---

## 🌍 Deploy

O projeto é compatível com deploy na **Vercel**, aproveitando ao máximo as otimizações do Next.js.

---

## 📄 Licença

Este projeto é de uso pessoal e educacional. Sinta-se à vontade para se inspirar, mas personalize conforme sua identidade.

---

## ✨ Considerações Finais

Este portfólio foi desenvolvido com foco em:

* Clareza
* Organização
* Performance
* Experiência do usuário

Ele representa não apenas projetos, mas também a evolução como desenvolvedor.
