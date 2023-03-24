import { Connection } from './connection'

var db = null
export default class DatabaseInit {

    constructor() {
        db = Connection.getConnection()
        db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
        console.log('Foreign keys turned on')
    );
        this.InitDb()
    }
    private InitDb() {
        var sql = [
            // `DROP TABLE IF EXISTS testing;`,
            // `DROP TABLE IF EXISTS option;`,
            `CREATE TABLE IF NOT EXISTS testing (
                id INTEGER PRIMARY KEY,
                name TEXT UNIQUE
            );`,
            `CREATE TABLE IF NOT EXISTS option (
                id INTEGER PRIMARY KEY,
                question TEXT,
                testing_id INTEGER,
                FOREIGN KEY (testing_id) REFERENCES testing(id)
            );`,
            `CREATE TABLE IF NOT EXISTS onboarding (
                id INTEGER PRIMARY KEY,
                name TEXT UNIQUE
            );`,
            //Testing TDAH
            `INSERT INTO testing(name)
                SELECT 'Teste de TDAH'
                WHERE NOT EXISTS (SELECT 1 FROM testing WHERE name = 'Teste de TDAH');
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem dificuldade para se concentrar em leituras ou outras atividades que exigem atenção?', 1
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem dificuldade para se concentrar em leituras ou outras atividades que exigem atenção?' AND testing_id = 1);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você se distrai facilmente com estímulos externos ou com seus próprios pensamentos?', 1
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você se distrai facilmente com estímulos externos ou com seus próprios pensamentos?' AND testing_id = 1);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você costuma esquecer de fazer tarefas ou de cumprir compromissos?', 1
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você costuma esquecer de fazer tarefas ou de cumprir compromissos?' AND testing_id = 1);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você perde objetos com frequência ou tem dificuldade para se organizar?', 1
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você perde objetos com frequência ou tem dificuldade para se organizar?' AND testing_id = 1);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você se sente desinteressado ou entediado por coisas que não lhe agradam?', 1
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você se sente desinteressado ou entediado por coisas que não lhe agradam?' AND testing_id = 1);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você é impulsivo e age sem pensar nas consequências?', 1
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você é impulsivo e age sem pensar nas consequências?' AND testing_id = 1);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você interrompe as pessoas quando elas estão falando ou tem dificuldade para esperar a sua vez?', 1
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você interrompe as pessoas quando elas estão falando ou tem dificuldade para esperar a sua vez?' AND testing_id = 1);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você é inquieto e não consegue ficar parado ou quieto por muito tempo?', 1
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você é inquieto e não consegue ficar parado ou quieto por muito tempo?' AND testing_id = 1);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você fala demais ou tem dificuldade para controlar o volume da sua voz?', 1
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você fala demais ou tem dificuldade para controlar o volume da sua voz?' AND testing_id = 1);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tende a ser impaciente ou irritado com facilidade?', 1
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tende a ser impaciente ou irritado com facilidade?' AND testing_id = 1);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem problemas para seguir instruções ou regras estabelecidas?', 1
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem problemas para seguir instruções ou regras estabelecidas?' AND testing_id = 1);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você comete erros por falta de atenção aos detalhes ou por descuido?', 1
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você comete erros por falta de atenção aos detalhes ou por descuido?' AND testing_id = 1);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você evita ou adia atividades que exigem esforço mental prolongado?', 1
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você evita ou adia atividades que exigem esforço mental prolongado?' AND testing_id = 1);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem baixa autoestima ou se sente inferior aos outros?', 1
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem baixa autoestima ou se sente inferior aos outros?' AND testing_id = 1);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem dificuldade para manter o foco em uma única coisa por muito tempo?', 1
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem dificuldade para manter o foco em uma única coisa por muito tempo?' AND testing_id = 1);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você é ansioso ou nervoso na maioria das situações?', 1
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você é ansioso ou nervoso na maioria das situações?' AND testing_id = 1);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem tendência ao vício (jogos, álcool, drogas) ou ao comportamento compulsivo (compras, comida)?', 1
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem tendência ao vício (jogos, álcool, drogas) ou ao comportamento compulsivo (compras, comida)?' AND testing_id = 1);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem temperamento explosivo ou agressivo em alguns momentos?', 1
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem temperamento explosivo ou agressivo em alguns momentos?' AND testing_id = 1);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você apresenta dificuldades de aprendizagem ou de desempenho acadêmico ou profissional?', 1
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você apresenta dificuldades de aprendizagem ou de desempenho acadêmico ou profissional?' AND testing_id = 1);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você já teve algum acidente de trânsito ou infração por dirigir de forma imprudente?', 1
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você já teve algum acidente de trânsito ou infração por dirigir de forma imprudente?' AND testing_id = 1);
            `,
            //Testing Autismo
            `INSERT INTO testing(name)
                SELECT 'Teste de Autismo'
                WHERE NOT EXISTS (SELECT 1 FROM testing WHERE name = 'Teste de Autismo');
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem dificuldade para manter contato visual com outras pessoas?', 2
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem dificuldade para manter contato visual com outras pessoas?' AND testing_id = 2);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem dificuldade para entender e expressar gestos e expressões faciais?', 2
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem dificuldade para entender e expressar gestos e expressões faciais?' AND testing_id = 2);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem dificuldade para fazer amigos ou se relacionar com outras pessoas?', 2
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem dificuldade para fazer amigos ou se relacionar com outras pessoas?' AND testing_id = 2);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem dificuldade para compartilhar seus interesses ou sentimentos com os outros?', 2
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem dificuldade para compartilhar seus interesses ou sentimentos com os outros?' AND testing_id = 2);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você se aborrece ou se irrita com mudanças na sua rotina ou no seu ambiente?', 2
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você se aborrece ou se irrita com mudanças na sua rotina ou no seu ambiente?' AND testing_id = 2);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você apresenta comportamentos repetitivos, como abanar as mãos, estalar os dedos ou balançar o corpo?', 2
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você apresenta comportamentos repetitivos, como abanar as mãos, estalar os dedos ou balançar o corpo?' AND testing_id = 2);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem interesse excessivo ou incomum por determinados assuntos ou objetos?', 2
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem interesse excessivo ou incomum por determinados assuntos ou objetos?' AND testing_id = 2);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você é mais sensível a sons, luzes, cheiros ou contato físico do que a maioria das pessoas?', 2
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você é mais sensível a sons, luzes, cheiros ou contato físico do que a maioria das pessoas?' AND testing_id = 2);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você não responde ao seu nome quando é chamado ou ignora as tentativas de comunicação dos outros?', 2
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você não responde ao seu nome quando é chamado ou ignora as tentativas de comunicação dos outros?' AND testing_id = 2);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você fala demais sobre o mesmo assunto ou repete palavras ou frases que ouviu?', 2
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você fala demais sobre o mesmo assunto ou repete palavras ou frases que ouviu?' AND testing_id = 2);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem problemas para seguir instruções ou regras estabelecidas?', 2
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem problemas para seguir instruções ou regras estabelecidas?' AND testing_id = 2);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você comete erros por falta de atenção aos detalhes ou por não entender o contexto da situação?', 2
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você comete erros por falta de atenção aos detalhes ou por não entender o contexto da situação?' AND testing_id = 2);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você evita ou adia atividades que exigem esforço mental prolongado?', 2
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você evita ou adia atividades que exigem esforço mental prolongado?' AND testing_id = 2);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem baixa autoestima ou se sente diferente dos outros?', 2
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem baixa autoestima ou se sente diferente dos outros?' AND testing_id = 2);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem dificuldade para manter o foco em uma única coisa por muito tempo?', 2
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem dificuldade para manter o foco em uma única coisa por muito tempo?' AND testing_id = 2);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você é ansioso ou nervoso na maioria das situações?', 2
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você é ansioso ou nervoso na maioria das situações?' AND testing_id = 2);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem tendência ao isolamento social ou à solidão?', 2
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem tendência ao isolamento social ou à solidão?' AND testing_id = 2);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem temperamento explosivo ou agressivo em alguns momentos?', 2
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem temperamento explosivo ou agressivo em alguns momentos?' AND testing_id = 2);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você apresenta dificuldades de aprendizagem ou de desempenho acadêmico ou profissional?', 2
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você apresenta dificuldades de aprendizagem ou de desempenho acadêmico ou profissional?' AND testing_id = 2);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você já teve algum problema de saúde mental associado ao autismo, como depressão, ansiedade, TOC ou TDAH?', 2
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você já teve algum problema de saúde mental associado ao autismo, como depressão, ansiedade, TOC ou TDAH?' AND testing_id = 2);
            `,
            //Testing bipolaridade
            `INSERT INTO testing(name)
                SELECT 'Teste de Bipolaridade'
                WHERE NOT EXISTS (SELECT 1 FROM testing WHERE name = 'Teste de Bipolaridade');
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem períodos de euforia ou irritabilidade excessiva?', 3
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem períodos de euforia ou irritabilidade excessiva?' AND testing_id = 3);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem períodos de tristeza ou desânimo profundo?', 3
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem períodos de tristeza ou desânimo profundo?' AND testing_id = 3);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você alterna entre esses dois estados de humor com frequência ou sem motivo aparente?', 3
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você alterna entre esses dois estados de humor com frequência ou sem motivo aparente?' AND testing_id = 3);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem dificuldade para se concentrar ou tomar decisões?', 3
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem dificuldade para se concentrar ou tomar decisões?' AND testing_id = 3);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem alterações significativas no seu apetite ou peso?', 3
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem alterações significativas no seu apetite ou peso?' AND testing_id = 3);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem fadiga ou falta de energia?', 3
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem fadiga ou falta de energia?' AND testing_id = 3);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você se sente inútil, sem esperança ou culpado por alguma coisa?', 3
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você se sente inútil, sem esperança ou culpado por alguma coisa?' AND testing_id = 3);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem pensamentos suicidas ou já tentou se matar?', 3
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem pensamentos suicidas ou já tentou se matar?' AND testing_id = 3);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você é impulsivo e age sem pensar nas consequências?', 3
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você é impulsivo e age sem pensar nas consequências?' AND testing_id = 3);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você interrompe as pessoas quando elas estão falando ou tem dificuldade para esperar a sua vez?', 3
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você interrompe as pessoas quando elas estão falando ou tem dificuldade para esperar a sua vez?' AND testing_id = 3);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você fala demais ou muito rápido sobre vários assuntos diferentes?', 3
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você fala demais ou muito rápido sobre vários assuntos diferentes?' AND testing_id = 3);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você é hiperativo ou muito passivo em diferentes situações?', 3
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você é hiperativo ou muito passivo em diferentes situações?' AND testing_id = 3);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem comportamentos agressivos com outras pessoas ou consigo mesmo?', 3
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem comportamentos agressivos com outras pessoas ou consigo mesmo?' AND testing_id = 3);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem necessidade intensa de repetição ou ritualização de certas ações?', 3
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem necessidade intensa de repetição ou ritualização de certas ações?' AND testing_id = 3);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem interesse excessivo ou incomum por determinados assuntos ou atividades?', 3
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem interesse excessivo ou incomum por determinados assuntos ou atividades?' AND testing_id = 3);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você é ansioso ou nervoso na maioria das situações?', 3
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você é ansioso ou nervoso na maioria das situações?' AND testing_id = 3);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tende ao vício (jogos, álcool, drogas) ou ao comportamento compulsivo (compras, comida)?', 3
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tende ao vício (jogos, álcool, drogas) ou ao comportamento compulsivo (compras, comida)?' AND testing_id = 3);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem temperamento explosivo ou instável em alguns momentos?', 3
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem temperamento explosivo ou instável em alguns momentos?' AND testing_id = 3);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você apresenta dificuldades de relacionamento social, familiar, afetivo ou profissional?', 3
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você apresenta dificuldades de relacionamento social, familiar, afetivo ou profissional?' AND testing_id = 3);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você já teve algum problema de saúde mental associado à bipolaridade, como depressão, ansiedade, TOC ou TDAH?', 3
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você já teve algum problema de saúde mental associado à bipolaridade, como depressão, ansiedade, TOC ou TDAH?' AND testing_id = 3);
            `,
            //Testing dislexia
            `INSERT INTO testing(name)
                SELECT 'Teste de Dislexia'
                WHERE NOT EXISTS (SELECT 1 FROM testing WHERE name = 'Teste de Dislexia');
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem dificuldade para ler, escrever e soletrar?', 4
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem dificuldade para ler, escrever e soletrar?' AND testing_id = 4);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem dificuldade para entender e compreender textos escritos?', 4
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem dificuldade para entender e compreender textos escritos?' AND testing_id = 4);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você omite, acrescenta, troca ou inverte a ordem e direção das letras e sílabas?', 4
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você omite, acrescenta, troca ou inverte a ordem e direção das letras e sílabas?' AND testing_id = 4);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem dificuldade para decorar a tabuada ou reconhecer símbolos e conceitos matemáticos?', 4
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem dificuldade para decorar a tabuada ou reconhecer símbolos e conceitos matemáticos?' AND testing_id = 4);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem dificuldade para se concentrar ou se distrai facilmente?', 4
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem dificuldade para se concentrar ou se distrai facilmente?' AND testing_id = 4);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você se sente inútil, sem esperança ou culpado por alguma coisa?', 4
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você se sente inútil, sem esperança ou culpado por alguma coisa?' AND testing_id = 4);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você é impulsivo e age sem pensar nas consequências?', 4
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você é impulsivo e age sem pensar nas consequências?' AND testing_id = 4);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você interrompe as pessoas quando elas estão falando ou tem dificuldade para esperar a sua vez?', 4
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você interrompe as pessoas quando elas estão falando ou tem dificuldade para esperar a sua vez?' AND testing_id = 4);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você fala demais sobre o mesmo assunto ou repete palavras ou frases que ouviu?', 4
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você fala demais sobre o mesmo assunto ou repete palavras ou frases que ouviu?' AND testing_id = 4);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você é hiperativo ou muito passivo em diferentes situações?', 4
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você é hiperativo ou muito passivo em diferentes situações?' AND testing_id = 4);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem comportamentos agressivos com outras pessoas ou consigo mesmo?', 4
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem comportamentos agressivos com outras pessoas ou consigo mesmo?' AND testing_id = 4);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem necessidade intensa de repetição ou ritualização de certas ações?', 4
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem necessidade intensa de repetição ou ritualização de certas ações?' AND testing_id = 4);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem interesse excessivo ou incomum por determinados assuntos ou atividades?', 4
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem interesse excessivo ou incomum por determinados assuntos ou atividades?' AND testing_id = 4);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você é ansioso ou nervoso na maioria das situações?', 4
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você é ansioso ou nervoso na maioria das situações?' AND testing_id = 4);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tende ao isolamento social ou à solidão?', 4
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tende ao isolamento social ou à solidão?' AND testing_id = 4);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem temperamento explosivo ou instável em alguns momentos?', 4
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem temperamento explosivo ou instável em alguns momentos?' AND testing_id = 4);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você apresenta dificuldades de relacionamento social, familiar, afetivo ou profissional?', 4
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você apresenta dificuldades de relacionamento social, familiar, afetivo ou profissional?' AND testing_id = 4);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você já teve algum problema de saúde mental associado à dislexia, como depressão, ansiedade, TOC ou TDAH?', 4
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você já teve algum problema de saúde mental associado à dislexia, como depressão, ansiedade, TOC ou TDAH?' AND testing_id = 4);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você começou a falar mais tardiamente do que outras crianças da mesma idade?', 4
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você começou a falar mais tardiamente do que outras crianças da mesma idade?' AND testing_id = 4);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você teve atraso no desenvolvimento motor como engatinhar, sentar e/ou andar?', 4
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você teve atraso no desenvolvimento motor como engatinhar, sentar e/ou andar?' AND testing_id = 4);
            `,
            //Testing Ansiedade
            `INSERT INTO testing(name)
                SELECT 'Teste de Ansiedade'
                WHERE NOT EXISTS (SELECT 1 FROM testing WHERE name = 'Teste de Ansiedade');
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você se sente nervoso, ansioso ou no limite na maior parte do tempo?', 5
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você se sente nervoso, ansioso ou no limite na maior parte do tempo?' AND testing_id = 5);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você se sente cansado facilmente ou tem falta de energia?', 5
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você se sente cansado facilmente ou tem falta de energia?' AND testing_id = 5);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem dificuldade para dormir ou permanecer dormindo?', 5
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem dificuldade para dormir ou permanecer dormindo?' AND testing_id = 5);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem dificuldade para parar de se preocupar ou se livrar de pensamentos negativos?', 5
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem dificuldade para parar de se preocupar ou se livrar de pensamentos negativos?' AND testing_id = 5);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem dificuldade para relaxar ou se acalmar?', 5
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem dificuldade para relaxar ou se acalmar?' AND testing_id = 5);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você se sente tão preocupado que é difícil ficar parado ou sossegado?', 5
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você se sente tão preocupado que é difícil ficar parado ou sossegado?' AND testing_id = 5);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você se sente irritado ou chateado com facilidade?', 5
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você se sente irritado ou chateado com facilidade?' AND testing_id = 5);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem medo constante de que algo muito ruim vai acontecer?', 5
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem medo constante de que algo muito ruim vai acontecer?' AND testing_id = 5);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem náuseas, vômitos, tontura ou sensação de desmaio?', 5
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem náuseas, vômitos, tontura ou sensação de desmaio?' AND testing_id = 5);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem falta de ar, respiração ofegante, dor no peito ou palpitações no coração?', 5
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem falta de ar, respiração ofegante, dor no peito ou palpitações no coração?' AND testing_id = 5);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem dor de barriga, diarreia ou constipação?', 5
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem dor de barriga, diarreia ou constipação?' AND testing_id = 5);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você roe as unhas, sente tremores ou fala muito rápido?', 5
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você roe as unhas, sente tremores ou fala muito rápido?' AND testing_id = 5);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem tensão muscular, dor nas costas ou nos ombros?', 5
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem tensão muscular, dor nas costas ou nos ombros?' AND testing_id = 5);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem dificuldade para se concentrar ou tomar decisões?', 5
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem dificuldade para se concentrar ou tomar decisões?' AND testing_id = 5);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você evita situações que possam causar ansiedade ou medo (como falar em público)?', 5
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você evita situações que possam causar ansiedade ou medo (como falar em público)?' AND testing_id = 5);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você usa álcool, drogas ou medicamentos para aliviar a ansiedade?', 5
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você usa álcool, drogas ou medicamentos para aliviar a ansiedade?' AND testing_id = 5);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem alterações de humor frequentes (como ficar triste e alegre sem motivo)?', 5
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem alterações de humor frequentes (como ficar triste e alegre sem motivo)?' AND testing_id = 5);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem problemas de relacionamento social, familiar, afetivo ou profissional por causa da ansiedade?', 5
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem problemas de relacionamento social, familiar, afetivo ou profissional por causa da ansiedade?' AND testing_id = 5);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você já teve algum ataque de pânico (crise súbita e intensa de medo e mal-estar)?', 5
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você já teve algum ataque de pânico (crise súbita e intensa de medo e mal-estar)?' AND testing_id = 5);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você já teve algum problema de saúde mental associado à ansiedade (como depressão, TOC ou fobia)?', 5
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você já teve algum problema de saúde mental associado à ansiedade (como depressão, TOC ou fobia)?' AND testing_id = 5);
            `,
            //Testing depressão
            `INSERT INTO testing(name)
                SELECT 'Teste de Depressão'
                WHERE NOT EXISTS (SELECT 1 FROM testing WHERE name = 'Teste de Depressão');
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você se sente triste, vazio ou desanimado na maior parte do tempo?', 6
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você se sente triste, vazio ou desanimado na maior parte do tempo?' AND testing_id = 6);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você perdeu o interesse ou o prazer por atividades que antes gostava de fazer?', 6
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você perdeu o interesse ou o prazer por atividades que antes gostava de fazer?' AND testing_id = 6);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem dificuldade para dormir ou dorme demais?', 6
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem dificuldade para dormir ou dorme demais?' AND testing_id = 6);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você se sente cansado ou sem energia quase todos os dias?', 6
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você se sente cansado ou sem energia quase todos os dias?' AND testing_id = 6);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem alterações significativas no seu apetite ou peso (aumento ou diminuição)?', 6
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem alterações significativas no seu apetite ou peso (aumento ou diminuição)?' AND testing_id = 6);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você se sente inútil, culpado ou sem esperança por alguma coisa?', 6
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você se sente inútil, culpado ou sem esperança por alguma coisa?' AND testing_id = 6);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem dificuldade para se concentrar, pensar ou tomar decisões?', 6
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem dificuldade para se concentrar, pensar ou tomar decisões?' AND testing_id = 6);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem pensamentos recorrentes de desistir da vida ou de se machucar?', 6
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem pensamentos recorrentes de desistir da vida ou de se machucar?' AND testing_id = 6);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você se sente irritado, ansioso ou angustiado com frequência?', 6
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você se sente irritado, ansioso ou angustiado com frequência?' AND testing_id = 6);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem dores de cabeça, musculares, abdominais ou outras sem causa aparente?', 6
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem dores de cabeça, musculares, abdominais ou outras sem causa aparente?' AND testing_id = 6);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem problemas digestivos (azia, má digestão, constipação) que não melhoram com tratamento?', 6
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem problemas digestivos (azia, má digestão, constipação) que não melhoram com tratamento?' AND testing_id = 6);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem tensão na nuca e nos ombros ou pressão no peito?', 6
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem tensão na nuca e nos ombros ou pressão no peito?' AND testing_id = 6);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você roe as unhas, sente tremores ou fala muito rápido?', 6
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você roe as unhas, sente tremores ou fala muito rápido?' AND testing_id = 6);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você evita situações que possam causar tristeza ou medo (como sair de casa)?', 6
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você evita situações que possam causar tristeza ou medo (como sair de casa)?' AND testing_id = 6);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você usa álcool, drogas ou medicamentos para aliviar a tristeza?', 6
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você usa álcool, drogas ou medicamentos para aliviar a tristeza?' AND testing_id = 6);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem alterações de humor frequentes (como ficar eufórico e deprimido sem motivo)?', 6
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem alterações de humor frequentes (como ficar eufórico e deprimido sem motivo)?' AND testing_id = 6);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tende ao isolamento social ou à solidão?', 6
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tende ao isolamento social ou à solidão?' AND testing_id = 6);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você tem problemas de relacionamento social, familiar, afetivo ou profissional por causa da tristeza?', 6
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você tem problemas de relacionamento social, familiar, afetivo ou profissional por causa da tristeza?' AND testing_id = 6);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você já teve algum episódio de pânico (crise súbita e intensa de medo e mal-estar)?', 6
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você já teve algum episódio de pânico (crise súbita e intensa de medo e mal-estar)?' AND testing_id = 6);
            `,
            `INSERT INTO option(question, testing_id)
                SELECT 'Você já teve algum problema de saúde mental associado à depressão (como ansiedade, TOC ou fobia)?', 6
                WHERE NOT EXISTS (SELECT 1 FROM option WHERE question = 'Você já teve algum problema de saúde mental associado à depressão (como ansiedade, TOC ou fobia)?' AND testing_id = 6);
            `,
        ];

        db.transaction(
            tx => {
                for (var i = 0; i < sql.length; i++) {
                    console.log("execute sql : " + sql[i]);
                    tx.executeSql(sql[i]);
                }
            }, (error) => {
                console.log("error call back : " + JSON.stringify(error));
                console.log(error);
            }, () => {
                console.log("transaction complete call back ");
            }
        );
    }

}