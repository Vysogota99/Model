<template>
    <div class="theory">
<!--        <v-content>-->
            <v-row justify="center">
                <v-col cols="6">
                    <br><br>
                    <h1 style="font-size: 3rem">SIR</h1>
                    <h2 style="color: #B0B0B0">What is SIR model</h2>
                    <br>
                    <p>
                        SIR model is a kind of compartmental model describing the dynamics of infectious disease. You may wonder why it is called the “compartmental model.” The model divides the population into compartments. Each compartment is expected to have the same characteristics. SIR represents the three compartments segmented by the model.
                    </p>
                    <ul>
                        <li><b>S</b>usceptible</li>
                        <li><b>I</b>nfectious</li>
                        <li><b>R</b>ecovered</li>
                    </ul>
                    <br>
                    <v-btn
                            color="blue"
                            text
                            to="/sir/model"
                    >
                        Протестировать >
                    </v-btn>
                </v-col>
            </v-row>
            <v-row justify="center" style="background-color: #fff;">
                <v-col cols="6">
                    <br><br>
                    <p style="color: #232323">
                        <span>Susceptible</span> is a group of people who are vulnerable to exposure with infectious people. They can be patient when the infection happens. The group of <span>infectious</span> represents the infected people. They can pass the disease to susceptible people and can be recovered in a specific period. <span>Recovered</span> people get immunity so that they are not susceptible to the same illness anymore. SIR model is a framework describing how the number of people in each group can change over time.
                    </p>
                    <br>
                    <v-img
                            src="https://www.lewuathe.com/assets/img/posts/2020-03-11-covid-19-dynamics-with-sir-model/sir.png"
                            height="200"
                            contain
                    ></v-img>
                    <br>
                    <p style="color: #232323">
                        SIR model allows us to describe the number of people in each compartment with the ordinary differential equation.
                        β
                        is a parameter controlling how much the disease can be transmitted through exposure. It is determined by the chance of contact and the probability of disease transmission.
                        γ
                        is a parameter expressing how much the disease can be recovered in a specific period. Once the people are healed, they get immunity. There is no chance for them to go back susceptible again.
                    </p>
                    <br>
                    <v-img
                            src="https://www.lewuathe.com/assets/img/posts/2020-03-11-covid-19-dynamics-with-sir-model/ode.png"
                            height="300"
                            contain
                    ></v-img>
                    <br>
                    <p style="color: #232323">
                        We do not consider the effect of the natural death or birth rate because the model assumes the outstanding period of the disease is much shorter than the lifetime of the human. It lets us know the importance of knowing two parameters,
                        β
                        and
                        γ
                        . When we can estimate the two values, there are several insights derived from it. If the
                        D
                        is the average days to recover from infectious, it is derived from
                        γ
                        .
                    </p>
                    <br>
                    <br>
                        <img src="./D.png" style="margin-left: 44%">
                    <br>
                    <br>
                    <p style="color: #232323;">
                        Also, we can estimate the nature of the disease in terms of the power of infection.
                    </p>
                    <br>
                    <img src="./R0.png" style="margin-left: 44%">
                    <br>
                    <br>
                    <p style="color: #232323;">It is called a basic reproduction number.
                        R
                        0
                        is the average number of people infected from one other person. If it is high, the probability of pandemic is also higher</p>
                 </v-col>

            </v-row>
<!--        </v-content>-->
    </div>
</template>

<script>
    export default {
        name: "TheoryComponent"
    }
</script>

<style scoped>
    span{
        font-weight: bold;
    }
.theory{
}
</style>