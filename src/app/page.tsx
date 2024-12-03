import {Avatar, Button, Card, CardBody, CardHeader, Image} from "@nextui-org/react";
import Link from "next/link";
import Head from 'next/head';


export default function Home() {
  return (
    <>

    <Head>
        <meta name="viewport" content="viewport-fit=cover" />
    </Head>

    <main>
    <header>
        <h1><span className="2xl:text-8xl xl:text-8xl lg:text-6xl text-6xl text-center font-black pb-10">Crie artigos em minutos</span> utilizando IA.</h1>
        <h2>Com o poder da IA, <strong>gere conteúdo otimizado e relevante</strong> para seu Blog ou LinkedIn de forma rápida e personalizada. <strong>Deixe a tecnologia trabalhar para você</strong> enquanto foca no que realmente importa: o seu negócio.</h2>
        <Button href="#gerar-meu-artigo-agora" as={Link} size="lg" className="bg-indigo-500 text-white text-xl">Começar agora</Button>
    </header>

    <section>
        <div>
            <Image
                width={280}
                alt="Deixe a IA criar conteúdo de qualidade para você!"
                src="./artigo-express-inteligencia-artificial.png"
                className="p-10"
            />
        </div>
        <div>
            <h3>Deixe a IA criar conteúdo de qualidade para você!</h3>
            <p>O Artigo Express é uma plataforma de criação de conteúdo automatizada que utiliza inteligência artificial para gerar artigos otimizados para blogs e redes sociais. Você insere as instruções, como tópicos e palavras-chave, e nossa IA entrega um artigo pronto em minutos. Não importa se você precisa de textos técnicos, informais ou voltados para marketing – nós fazemos o trabalho pesado por você.</p>
        </div>
    </section>

    <section>
        <h3>Crie em 3 passos simples!</h3>
        <section className="md:flex-row gap-10">
            <div className="flex flex-col flex-wrap justify-center items-center w-64">
                <Image
                    width={160}
                    alt="primeiro passo preencha as instruções"
                    src="./artigo-express-preencha-as-informacoes.png"
                    className="p-6"
                />
                <span>Preencha as instruções</span>
                <p>Informe o título, as palavras-chave e o estilo desejado.</p>
            </div>
            <div className="flex flex-col flex-wrap justify-center items-center w-64">
                <Image
                    width={160}
                    alt="segundo passo deixe a IA trabalhar"
                    src="./artigo-express-deixe-a-ia-trabalhar.png"
                    className="p-6"
                />
                <span>A IA faz o resto</span>
                <p>Deixe a inteligência artificial gerar um conteúdo de alta qualidade.</p>
            </div>
            <div className="flex flex-col flex-wrap justify-center items-center w-64">
                <Image
                    width={160}
                    alt="terceiro passo edite e publique seu artigo"
                    src="./artigo-express-edite-e-publique-seu-conteudo.png"
                    className="p-6"
                />
                <span>Edite e publique</span>
                <p>Revise, personalize se necessário e publique em seu blog ou LinkedIn.</p>
            </div> 
        </section>          
        <Button href="#gerar-meu-artigo-agora" as={Link} size="lg" className="bg-indigo-500 text-white text-xl">Começar agora</Button>
    </section>

    <section>
        <div className="flex self-center justify-center">
            <Image
                width={300}
                alt="porque utilizar a artigo express?"
                src="./artigo-express-porque.png"
                className="xl:w-300 xl:p-10 lg:p-20 md:p-10 p-20 "
            />
        </div>
        <div className="text-left h-full">
            <h3 className="text-left">Por Que Usar o Artigo Express?</h3>

            <span>Economia de tempo:</span>
            <p className="text-left">Crie artigos em minutos, sem perder horas escrevendo.</p>
        
            <span>SEO otimizado:</span> 
            <p className="text-left">Nossos textos são otimizados para SEO, ajudando a aumentar sua visibilidade.</p>
        
            <span>Conteúdo personalizado:</span>
            <p className="text-left">Você tem controle total sobre o tema, estilo e palavras-chave dos artigos.</p>
        
            <span>Copia e cola:</span> 
            <p className="text-left">Publique diretamente no seu blog ou LinkedIn com facilidade.</p>
        </div>
    </section>

    <section>
        <div className="text-left h-full">
            <h3>Pague por artigo!</h3>
            <p>Se você precisa de flexibilidade e quer pagar apenas pelos artigos que gerar, oferecemos uma opção de pagamento simples e acessível. Sem planos mensais ou compromissos – pague conforme a necessidade do seu negócio.</p>
        </div>
    </section>

    <section>
        <Card>
            <CardBody>
                <div className="flex">
                    <div className="p-4">
                        <Image
                            width={160}
                            alt="porque utilizar a artigo express?"
                            src="./artigo-express-pague-por-artigo.png"
                        />
                    </div>
                    <div className="mx-auto self-center">
                        <span className="text-8xl font-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text"><span className="text-4xl align-middle">R$</span>9,89</span>
                        <p className="flex justify-end text-xl font-light pb-4">por Artigo</p>
                        <Button href="https://pay.kiwify.com.br/6TM57c9" as={Link} target="_blank" size="lg" className="flex justify-center bg-indigo-500 text-white text-xl">Gerar meu artigo agora!</Button>
                    </div>
                </div>
            </CardBody>
        </Card>
    </section>

    <section>
        <div className="text-left h-full">
            <span >Sem Compromisso Mensal:</span> 
            <p className="text-left">Ideal para quem precisa de artigos de forma esporádica.</p>

            <span >Alta Qualidade a um Preço Acessível:</span>
            <p className="text-left">Receba artigos prontos para publicação por um valor que cabe no seu orçamento.</p>

            <span>Conteúdo Sob Demanda:</span> 
            <p className="text-left">Pague apenas quando precisar, sem cobranças adicionais.</p>
        </div>
    </section>
    
    <section>
        <h3>O que nossos clientes dizem:</h3>

        <section className="gap-4">
            <Card>
                <CardHeader className="justify-between p-10">
                    <div className="flex gap-5">
                        <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-3.png" />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-xl font-bold leading-none text-default-600">Ana Silva</h4>
                            <h5 className="text-xl tracking-tight text-default-400">Marketing Digital</h5>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="px-10 py-0 text-medium">
                    <p className="text-xl font-light">O Artigo Express transformou minha estratégia de conteúdo. Agora consigo publicar artigos consistentes e de qualidade sem gastar horas!</p>
                    <span className="py-2 pb-10" aria-label="computer" role="img">⭐⭐⭐⭐⭐</span>
                </CardBody>
            </Card>

            <Card>
                <CardHeader className="justify-between p-10">
                    <div className="flex gap-5">
                        <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-8.png" />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-xl font-bold leading-none text-default-600">Carlos Souza</h4>
                            <h5 className="text-xl tracking-tight text-default-400">Redator Freelance</h5>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="px-10 py-0 text-medium">
                    <p className="text-xl font-light">Como redator, essa ferramenta tem sido essencial para otimizar meu fluxo de trabalho. Gera ótimos rascunhos para editar rapidamente.</p>
                    <span className="py-2 pb-10" aria-label="computer" role="img">⭐⭐⭐⭐⭐</span>
                </CardBody>
            </Card>
        </section>

        <Button href="#gerar-meu-artigo-agora" as={Link} size="lg" className="bg-indigo-500 text-white text-xl">Começar agora</Button>
    </section>

    <section>
        <div className="text-left h-full">
            <h3 className="text-left">Perguntas Frequentes</h3>

            <span>Quanto tempo leva para gerar um artigo?</span>
            <p className="text-left">Em média, o processo leva apenas alguns minutos.</p>
        
            <span>Posso editar o artigo gerado?</span> 
            <p className="text-left">Sim, você tem total controle sobre o conteúdo gerado e pode fazer ajustes antes de publicar.</p>
        
            <span>A plataforma é otimizada para SEO?</span>
            <p className="text-left">Sim, nossos algoritmos consideram as melhores práticas de SEO na criação dos artigos.</p>

            <span>Existe suporte disponível para dúvidas ou problemas?</span>
            <p className="text-left">Sim! Oferecemos suporte via WhatsApp, com atendimento realizado pela Agência Octopus. <Link href="https://wa.me/5511950712714" target="_blank" className="text-indigo-500">Clique aqui para entrar em contato</Link>.</p>
        </div>
    </section>

    <section>
        <Image
            width={200}
            alt="logo - artigo express"
            src="./logo.png"
            className="max-w-36 p-4"
        />
    </section>
    </main>

    </>
  );
}
