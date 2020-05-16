export default {
    actions: {

    },
    mutations: {
        change_lang: state => {
            state.isRus = !state.isRus
        },
    },
    state: {
        isRus: true,
        MatModel: '',
        ModelDesc: '',
        Sample: '',
        Title: '',
        SeirTitle: '',
        SeirP1: '',
        SeirP2: '',
        SeirP3: '',
        Susceptible: '',
        Exposed: '',
        Infected: '',
        Recovered: '',
        SeirPlotLabel1: '',
        SeirPlotLabel2: '',
        SampleP1: '',
        SampleP2: '',
        SampleP3: '',
        SampleP4: '',
        SampleP5: '',
        SampleP6: '',
        SampleP7: '',
        SampleP8: '',
        SampleP9: '',
        SampleP10: '',
        SampleP11: '',
        SampleP12: '',
        SampleH1: '',
        SampleH2: '',
        SampleH3: '',
        test: '',
        sir_D: '',
        sir_R0: '',
        sir_pob: '',
        TheoryP1: '',
        TheoryP2: '',
        TheoryP3: '',
        TheoryP4: '',
        TheoryP5: '',
        TheoryP6: '',
        TheoryTitle1: '',
        HomeSirCard: '',
        HomeSeirdCardP: '',
        HomeTutorialCardP: '',
        HomeModelCardP: '',
        HomeLocalCardP: '',
        HomeSeirdCardH: '',
        HomeTutorialCardH: '',
        HomeModelCardH: '',
        HomeLocalCardH: '',
        Go: '',
    },
    getters: {
        isRus: state => {
            return state.isRus;
        },
        MatModel: state => {
            if(state.isRus){
                return 'Математическая модель';
            }else{
                return 'Math model'
            }
        },
        ModelDesc: state => {
            if(state.isRus){
                return 'Описание модели';
            }else{
                return 'Model description';
            }
        },
        Sample: state => {
            if(state.isRus){
                return 'Пример импользования';
            }else{
                return 'Sample'
            }
        },
        Title: state => {
            if(state.isRus){
                return 'Модели распространения эпидемий';
            }else{
                return 'Outbreak patterns'
            }
        },
        SeirTitle: state => {
            if(state.isRus){
                return 'Сравнение результатов работы модели SEIR с реальными данными';
            }else{
                return 'Comparison of SEIR model results with real data'
            }
        },
        SeirP1: state => {
            if(state.isRus){
                return 'Модель эпидемии SEIRD относится к классу т.н. компартментальных моделей, суть которых состоит в том, чтобы разделить популяцию на несколько групп (англ. compartments), в нашем случае: S (англ. susceptible) — восприимчивые, E (англ. exposed) — те, у кого болезнь находится в инкубационном периоде, I (англ. infectious) — больные, R (англ. recovered) — выздоровевшие, D (англ. dead) — умершие. Затем, численность каждой из групп сопоставляется с переменной в системе дифференциальных уравнений, решая которую, можно спрогнозировать динамику развития эпидемии. Модификаций модели SEIRD достаточно много, например, SEIR — упрощенная модель, не учитывающая отдельно случаи выздоровления и смерти.';
            }else{
                return 'It is immediately clear that the SEIR model is not very suitable for describing COVID-19, if only because in this model hidden carriers of E infection are not contagious. This defect can be corrected by introducing, following Pengpeng et al., An additional parameter theta characterizing the degree of infectivity of latent carriers\n' +
                    'infection compared to diseased.'
            }
        },
        SeirP2: state => {
            if(state.isRus){
                return 'Сразу видно, что SEIR-модель не очень годится для описания COVID-19 хотя бы потому, что в этой модели скрытые носители инфекции E незаразны. Исправить этот недостаток можно, введя, вслед за Pengpeng et al., дополнительный параметр theta, характеризующий степень заразности латентных носителей инфекции по сравнению с заболевшими.';
            }else{
                return 'It is immediately clear that the SEIR model is not very suitable for describing COVID-19, if only because in this model hidden carriers of E infection are not contagious. This shortcoming can be corrected by introducing, following Pengpeng et al., An additional parameter theta, which characterizes the degree of infectivity of latent carriers of the infection compared with the diseased.'
            }
        },
        SeirP3: state => {
            if(state.isRus){
                return 'Значения параметров взяты из статьи на хабре, там же можно подробнее познакомиться с моделированием эпидемии на примере модели SEIRD:';
            }else{
                return 'The parameter values are taken from the article on the Habré, where you can get acquainted in more detail with epidemic modeling on the example of the SEIRD model:'
            }
        },
        Susceptible: state => {
            if(state.isRus){
                return 'Восприимчивые';
            }else{
                return 'Susceptible'
            }
        },
        Exposed: state => {
            if(state.isRus){
                return 'Болезнь в инкубационном периоде';
            }else{
                return 'Exposed'
            }
        },
        Infected: state => {
            if(state.isRus){
                return 'Зараженные';
            }else{
                return 'Infected'
            }
        },
        Recovered: state => {
            if(state.isRus){
                return 'Выздоровевшие';
            }else{
                return 'Recovered'
            }
        },
        SeirPlotLabel1: state => {
            if(state.isRus){
                return 'Реальные данные по заболевшим';
            }else{
                return 'Real data infected'
            }
        },
        SeirPlotLabel2: state => {
            if(state.isRus){
                return 'Смоделированные данные';
            }else{
                return 'SEIR data infected'
            }
        },
        SampleP1: state => {
            if(state.isRus){
                return 'Для понимания работы модели необходимо ознакомиться с теоретической частью. В ней подробно описаны уравнения и параметры, которые задают модель.';
            }else{
                return 'To understand the operation of the model, it is necessary to familiarize yourself with the theoretical part. It describes in detail the equations and parameters that define the model.'
            }
        },
        SampleP2: state => {
            if(state.isRus){
                return ' Рабочая область состоит из интерактивного графика, формы для установки начальных условий и двух полей с описательными хараактеристиками. Далее рассмотрим каждый элемент по отдельности.';
            }else{
                return 'The workspace consists of an interactive schedule, a form for setting the initial conditions, and two fields with descriptive characteristics. Next, we consider each element individually.'
            }
        },
        SampleP3: state => {
            if(state.isRus){
                return 'Модель SIR описывается задачей Коши с начальными условиями - количество здоровых, инфицированных, выздоровевших, β и γ. Пример заполнения параметров представлен ниже.';
            }else{
                return 'The SIR model is described by the Cauchy problem with initial conditions - the number of healthy, infected, recovered, β and γ. An example of filling in the parameters is presented below.'
            }
        },
        SampleP4: state => {
            if(state.isRus){
                return ' Количество здоровых людей устанавливается в поле "Susceptible". В силу ограничений программы, это число является константой, и его нельзя изменить. Таким образом количество здоровых людей - 100.';
            }else{
                return 'The number of healthy people is set in the "Susceptible" field. Due to the limitations of the program, this number is a constant and cannot be changed. Thus, the number of healthy people is 100.'
            }
        },
        SampleP5: state => {
            if(state.isRus){
                return ' Количество инфицированных в начальный момент времени устанавливается в поле "Infected". Поле представляет собой слайдер, при помощи которого можно выбрать долю здоровых людей. В данном случае количество инфицированных - 1.';
            }else{
                return 'The number of infected at the initial time is set in the "Infected" field. The field is a slider with which you can choose the proportion of healthy people. In this case, the number of infected is 1.'
            }
        },
        SampleP6: state => {
            if(state.isRus){
                return ' Количество выздоровевших в начальный момент времени устанавливается в поле "Recovered". В данном случае установлено значение 0.';
            }else{
                return 'The number of recovered at the initial time is set in the "Recovered" field. In this case, the value is set to 0.'
            }
        },
        SampleP7: state => {
            if(state.isRus){
                return '  Параметр β в начальный момент времени устанавливается в поле "Betta". Он показывает коэффициент интенсивности контактов индивидов с последующим инфицированием, установим значение 0.75.';
            }else{
                return 'The parameter β at the initial time is set in the "Betta" field. It shows the coefficient of contact intensity of individuals with subsequent infection, set the value to 0.75.'
            }
        },
        SampleP8: state => {
            if(state.isRus){
                return 'Параметр γ в начальный момент времени устанавливается в поле "Gamma". Он показывает коэффициент интенсивности выздоровления инфицированных индивидов, установим значение 0.25. На этом этапе процесс настройки модели завершается, далее перейдем к анализу полученных результатов.';
            }else{
                return 'The parameter γ at the initial time is set in the "Gamma" field. It shows the rate of recovery of infected individuals, set the value to 0.25. At this stage, the process of setting up the model is completed, then we proceed to the analysis of the results.'
            }
        },
        SampleP9: state => {
            if(state.isRus){
                return 'Рассмотрим полученные фазовые траектории. В модели строится интерактивных график, что позволяют с легкостью отпределить нужные значения в произвольный момент времени. Для этого необходимо навести курсор на конкретную точку графика, после чего появится окно, в котором представлены дискретные значения. Синяя прямая показывает значения здоровых людей, зеленая - выздоровевших, а оранжевая - число зараженных. В данном примере мы видим, что при заданных начальных условиях пик эпидемии приходится на 12 сутки, после чего люди приобретают иммунитет и болезнь полностью уходит уже через месяц.';
            }else{
                return 'Consider the obtained phase trajectories. An interactive graph is built in the model, which allows you to easily determine the desired values ​​at any time. To do this, move the cursor to a specific point in the graph, after which a window appears in which discrete values ​​are presented. The blue line shows the values ​​of healthy people, the green line shows the number of people who have recovered, and the orange line indicates the number of infected people. In this example, we see that under the given initial conditions, the peak of the epidemic occurs on day 12, after which people acquire immunity and the disease completely disappears after a month.';
            }
        },
        SampleP10: state => {
            if(state.isRus){
                return ' В окне "Basic reproduction number" указывается количество людей, зараженных одним переносчиком болезни.';
            }else{
                return 'The window "Basic reproduction number" indicates the number of people infected with a single carrier of the disease.';
            }
        },
        SampleP11: state => {
            if(state.isRus){
                return 'В окне "Average days to recover from infectious" указывается среднее время выздоровления.';
            }else{
                return 'In the window "Average days to recover from infectious" the average recovery time is indicated.';
            }
        },
        SampleH1: state => {
            if(state.isRus){
                return 'Описание рабочей области';
            }else{
                return 'Workspace Description';
            }
        },
        SampleH2: state => {
            if(state.isRus){
                return 'Установка начальных условий';
            }else{
                return 'Setting the initial conditions';
            }
        },
        SampleH3: state => {
            if(state.isRus){
                return 'Результат работы модели';
            }else{
                return 'The result of the model';
            }
        },
        test: state => {
            if(state.isRus){
                return ' Протестировать >';
            }else{
                return 'Try model >';
            }
        },
        sir_D: state => {
            if(state.isRus){
                return 'Среднее время выздоровления';
            }else{
                return 'Average days to recover from infectious'
            }
        },
        sir_R0: state => {
            if(state.isRus){
                return 'Среднее количество людей, заражаемых одним человеком';
            }else{
                return 'Basic reproduction number'
            }
        },
        TheoryP1: state => {
            if(state.isRus){
                return 'Модель SIR является своего рода компартментальной моделью, описывающей динамику инфекционных заболеваний. Вы можете задаться вопросом, почему она называется «компартментальная модель». Модель делит население на группы. Ожидается, что каждая группа будет иметь одинаковые характеристики. SIR представляет три группы, сегментированные моделью.';
            }else{
                return ' SIR model is a kind of compartmental model describing the dynamics of infectious disease. You may wonder why it is called the “compartmental model.” The model divides the population into compartments. Each compartment is expected to have the same characteristics. SIR represents the three compartments segmented by the model.'
            }
        },
        TheoryP2: state => {
            if(state.isRus){
                return 'Восприимчивые - это группа людей, которые уязвимы для контакта с инфекционными людьми. Когда происходит инфекция, они заболевют. Группа заразных представляет зараженных людей. Они могут передать заболевание восприимчивым людям и могут вылечиться через какое-то время. Выздоровевшие люди получают иммунитет, поэтому они больше не подвержены той же болезни. Модель SIR - это структура, описывающая, как количество людей в каждой группе может меняться со временем.';
            }else{
                return 'Susceptible is a group of people who are vulnerable to exposure with infectious people. They can be patient when the infection happens. The group of infectious represents the infected people. They can pass the disease to susceptible people and can be recovered in a specific period. Recovered people get immunity so that they are not susceptible to the same illness anymore. SIR model is a framework describing how the number of people in each group can change over time.'
            }
        },
        TheoryP3: state => {
            if(state.isRus){
                return 'Модель SIR позволяет нам описать количество людей в каждой группе с помощью обыкновенных дифференциальных уравнений. β - это параметр, контролирующий степень передачи заболевания при контакте. γ - это параметр, выражающий степень излечения заболевания за определенный период. Как только люди вылечиваются, они получают иммунитет, который не дает им стать  восприимчивыми.';
            }else{
                return 'SIR model allows us to describe the number of people in each compartment with the ordinary differential equation. β is a parameter controlling how much the disease can be transmitted through exposure. It is determined by the chance of contact and the probability of disease transmission. γ is a parameter expressing how much the disease can be recovered in a specific period. Once the people are healed, they get immunity. There is no chance for them to go back susceptible again.'
            }
        },
        TheoryP4: state => {
            if(state.isRus){
                return 'Модель учитывает влияние естественной смерти или рождаемости, потому что она предполагает, что период заболевания намного короче, чем продолжительность жизни человека. Это позволяет понять физический смысл параметров β и γ. По формуде ниже D - это среднее количество дней для выздоровления от инфекционного заболевания, оно определяется по γ.';
            }else{
                return 'We do not consider the effect of the natural death or birth rate because the model assumes the outstanding period of the disease is much shorter than the lifetime of the human. It lets us know the importance of knowing two parameters, β and γ . When we can estimate the two values, there are several insights derived from it. If the D is the average days to recover from infectious, it is derived from γ .'
            }
        },
        TheoryP5: state => {
            if(state.isRus){
                return 'Кроме того, мы можем оценить природу болезни с точки зрения силы инфекции.';
            }else{
                return 'Also, we can estimate the nature of the disease in terms of the power of infection.\n'
            }
        },
        TheoryP6: state => {
            if(state.isRus){
                return 'R0 - это среднее число людей, зараженных одним человеком. Если оно высокое, вероятность пандемии также высокая.';
            }else{
                return 'It is called a basic reproduction number. R 0 is the average number of people infected from one other person. If it is high, the probability of pandemic is also higher'
            }
        },
        TheoryTitle1: state => {
            if(state.isRus){
                return 'Описание модели SIR';
            }else{
                return 'What is SIR model'
            }
        },
        sir_pob: state => {
            if(state.isRus){
                return 'Вероятность заразиться';
            }else{
                return 'Probability to be infected'
            }
        },
        HomeSirCard: state => {
            if(state.isRus){
                return 'Модель SIR является своего рода компартментальной моделью, описывающей динамику инфекционных заболеваний...';
            }else{
                return 'The SIR model is a kind of compartmental model that describes the dynamics of infectious diseases.'
            }
        },
        Go: state => {
            if(state.isRus){
                return 'Далее >';
            }else{
                return 'More >'
            }
        },
        HomeSeirdCardP: state => {
            if(state.isRus){
                return 'Сразу видно, что SEIR-модель не очень годится для описания COVID-19 хотя бы потому, что в этой модели скрытые носители инфекции E незаразны. Исправить этот недостаток можно, введя, вслед за Pengpeng et al., дополнительный параметр...';
            }else{
                return 'It is immediately clear that the SEIR model is not very suitable for describing COVID-19, if only because in this model hidden carriers of E infection are not contagious. This shortcoming can be corrected by introducing, following Pengpeng et al., An additional parameter ...'
            }
        },
        HomeTutorialCardP: state => {
            if(state.isRus){
                return 'С помощью данного руководства вы поймете как настроить модель';
            }else{
                return 'With this guide you will understand how to configure the model.'
            }
        },
        HomeModelCardP: state => {
            if(state.isRus){
                return 'После ознакомления с руководством пользователя и теоретическими основами можно приступить к моделированию ...';
            }else{
                return 'After familiarizing yourself with the user manual and the theoretical background, you can start modeling ...'
            }
        },
        HomeLocalCardP: state => {
            if(state.isRus){
                return 'Сайт переведен на двух языках: английский и русский';
            }else{
                return 'The site is translated in two languages: English and Russian'
            }
        },
        HomeSeirdCardH: state => {
            if(state.isRus){
                return 'Проверка модели на реальных данных';
            }else{
                return 'Testing the model on real data'
            }
        },
        HomeTutorialCardH: state => {
            if(state.isRus){
                return 'Руководство пользователя';
            }else{
                return 'User\'s manual'
            }
        },
        HomeModelCardH: state => {
            if(state.isRus){
                return 'Математическая модель';
            }else{
                return 'Mathematical model'
            }
        },
        HomeLocalCardH: state => {
            if(state.isRus){
                return 'Локализация';
            }else{
                return 'Localization'
            }
        },

    }
}