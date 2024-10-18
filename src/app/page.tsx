import {Avatar, Button, Card, CardBody, CardHeader, Image} from "@nextui-org/react";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <header className="container mx-auto px-40 text-center">
        <div className="flex justify-center py-10">
            <Image
                width={200}
                alt="logo - artigo express"
                src="./logo.png"
            />
        </div>
        <h1 className="text-8xl font-black"><span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Crie artigos em minutos</span> utilizando IA.</h1>
        <h2 className="text-3xl font-light px-10 py-20">Com o poder da IA, <strong>gere conteúdo otimizado e relevante</strong> para seu Blog ou LinkedIn de forma rápida e personalizada. <strong>Deixe a tecnologia trabalhar para você</strong> enquanto foca no que realmente importa: o seu negócio.</h2>
        <Button href="#gerar-meu-artigo-agora" as={Link} size="lg" className="bg-indigo-500 text-white text-xl">Começar agora</Button>
    </header>

    <main className="container mx-auto px-40">
        <div className="flex py-20">
            <div className="flex flex-col w-2/4">
                <h3 className="text-4xl font-black">Deixe a IA criar conteúdo de qualidade para você!</h3>
                <p className="text-xl font-light py-10">O Artigo Express é uma plataforma de criação de conteúdo automatizada que utiliza inteligência artificial para gerar artigos otimizados para blogs e redes sociais. Você insere as instruções, como tópicos e palavras-chave, e nossa IA entrega um artigo pronto em minutos. Não importa se você precisa de textos técnicos, informais ou voltados para marketing – nós fazemos o trabalho pesado por você.</p>
            </div>
            <div className="flex justify-center w-2/4">
                <Image
                    width={280}
                    alt="Deixe a IA criar conteúdo de qualidade para você!"
                    src="./artigo-express-inteligencia-artificial.png"
                />
            </div>
        </div>
        <div className="container mx-auto text-center">
            <h3 className="text-4xl font-black">Crie em 3 passos simples!</h3>
            <div className="flex justify-between py-20">
                <div className="w-80">
                    <div className="flex justify-center pb-10">
                        <Image
                            width={160}
                            alt="primeiro passo preencha as instruções"
                            src="./artigo-express-preencha-as-informacoes.png"
                        />
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Preencha as instruções</span>
                    <p className="text-xl font-light">Informe o título, as palavras-chave e o estilo desejado.</p>
                </div>
                <div className="w-80">
                    <div className="flex justify-center pb-10">
                        <Image
                            width={160}
                            alt="segundo passo deixe a IA trabalhar"
                            src="./artigo-express-deixe-a-ia-trabalhar.png"
                        />
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">A IA faz o resto</span>
                    <p className="text-xl font-light">Deixe a inteligência artificial gerar um conteúdo de alta qualidade.</p>
                </div>
                <div className="w-80">
                    <div className="flex justify-center pb-10">
                        <Image
                            width={160}
                            alt="terceiro passo edite e publique seu artigo"
                            src="./artigo-express-edite-e-publique-seu-conteudo.png"
                        />
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Edite e publique</span>
                    <p className="text-xl font-light">Revise, personalize se necessário e publique em seu blog ou LinkedIn.</p>
                </div>
            </div>
            <Button href="#gerar-meu-artigo-agora" as={Link} size="lg" className="bg-indigo-500 text-white text-xl">Começar agora</Button>
        </div>

        <div className="container mx-auto text-center py-20 pt-40">
            <h3 className="text-4xl font-black">Por Que Usar o Artigo Express?</h3>
            <div className="flex columns-2 text-left py-20">
                <div className="flex self-center justify-center w-2/4 h-full">
                    <Image
                        width={300}
                        alt="porque utilizar a artigo express?"
                        src="./artigo-express-porque.png"
                    />
                </div>
                <div className="w-2/4">
                    <span className="text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Economia de tempo:</span>
                    <p className="text-xl font-light pb-4">Crie artigos em minutos, sem perder horas escrevendo.</p>
                
                    <span className="text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">SEO otimizado:</span> 
                    <p className="text-xl font-light pb-4">Nossos textos são otimizados para SEO, ajudando a aumentar sua visibilidade.</p>
                
                    <span className="text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Conteúdo personalizado:</span>
                    <p className="text-xl font-light pb-4">Você tem controle total sobre o tema, estilo e palavras-chave dos artigos.</p>
                
                    <span className="text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Copia e cola:</span> 
                    <p className="text-xl font-light pb-4">Publique diretamente no seu blog ou LinkedIn com facilidade.</p>
                </div>
            </div>
        </div>

        <div id="gerar-meu-artigo-agora" className="flex flex-wrap mx-auto ">
            <div className="mx-auto py-10 text-center">
                <h3 className=" text-4xl font-black pb-6">Pague por artigo!</h3>
                <p className="mx-auto text-xl font-light w-4/5">Se você precisa de flexibilidade e quer pagar apenas pelos artigos que gerar, oferecemos uma opção de pagamento simples e acessível. Sem planos mensais ou compromissos – pague conforme a necessidade do seu negócio.</p>
            </div>
            <div className="content-center p-10 w-2/4">
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
                            <p className="flex justify-center text-xl text-white font-bold font-mono rounded-small bg-rose-500 px-2 py-0.5 w-40"> de&nbsp;<span className="line-through">R$ 29,99</span></p>
                            <span className="text-8xl font-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text"><span className="text-4xl align-middle">R$</span>9,89</span>
                            <p className="flex justify-end text-xl font-light pb-4">por Artigo</p>
                            <Button href="https://pay.kiwify.com.br/6TM57c9" as={Link} target="_blank" size="lg" className="flex justify-center bg-indigo-500 text-white text-xl">Gerar meu artigo agora!</Button>
                        </div>
                    </div>
                </CardBody>
            </Card>
            </div>
            <div className="p-10 w-2/4">                
                <span className="text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Sem Compromisso Mensal:</span> 
                <p className="text-xl font-light pb-4">Ideal para quem precisa de artigos de forma esporádica.</p>
                <span className="text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Alta Qualidade a um Preço Acessível:</span>
                <p className="text-xl font-light pb-4">Receba artigos prontos para publicação por um valor que cabe no seu orçamento.</p>
                <span className="text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Conteúdo Sob Demanda:</span> 
                <p className="text-xl font-light pb-4">Pague apenas quando precisar, sem cobranças adicionais.</p>
            </div>
        </div>

        <div className="container mx-auto text-center py-20">
            <h3 className="text-4xl font-black pb-20">O que nossos clientes dizem:</h3>
            <div className="flex columns-2 pb-20">
                <Card className="m-5 w-2/4">
                    <CardHeader className="justify-between p-10">
                        <div className="flex gap-5">
                            <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
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

                <Card className="m-5 w-2/4">
                    <CardHeader className="justify-between p-10">
                        <div className="flex gap-5">
                            <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
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
            </div>
            <Button href="#gerar-meu-artigo-agora" as={Link} size="lg" className="bg-indigo-500 text-white text-xl">Começar agora</Button>
        </div>

        <div className="container mx-auto text-center py-10">
            <h3 className="text-4xl font-black">Perguntas Frequentes</h3>

            <div className="container mx-auto text-left p-10 w-4/5">
                <span className="text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Quanto tempo leva para gerar um artigo?</span>
                <p className="text-xl font-light pb-4">Em média, o processo leva apenas alguns minutos.</p>
            
                <span className="text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Posso editar o artigo gerado?</span> 
                <p className="text-xl font-light pb-4">Sim, você tem total controle sobre o conteúdo gerado e pode fazer ajustes antes de publicar.</p>
            
                <span className="text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">A plataforma é otimizada para SEO?</span>
                <p className="text-xl font-light pb-4">Sim, nossos algoritmos consideram as melhores práticas de SEO na criação dos artigos.</p>

                <span className="text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Existe suporte disponível para dúvidas ou problemas?</span>
                <p className="text-xl font-light pb-4">Sim! Oferecemos suporte via WhatsApp, com atendimento realizado pela Agência Octopus. <Link href="https://wa.me/5511950712714" target="_blank" className="text-indigo-500">Clique aqui para entrar em contato</Link>.</p>
            
            </div>
        </div>

    </main>
    </>
  );
}
