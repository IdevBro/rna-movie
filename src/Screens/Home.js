import React from "react";
import {
  View,
  Image,
  Text,
  Button,
  ScrollView,
  SafeAreaViewBase,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Container from "../components/Container";

const Home = ({ navigation }) => {
  return (
    <View className="flex-1 bg-slate-900 ">
      <View className={"bg-slate-900 shadow-xl  shadow-white "}>
        <Container>
          <SafeAreaView>
            <StatusBar style="light" />
            <View className=" flex-row justify-between items-center  ">
              <Image
                source={require("../../assets/logo.png")}
                className="w-[40] h-[40]  "
              />
              <MagnifyingGlassIcon size={30} strokeWidth={1} color={"white"} />
            </View>
          </SafeAreaView>
        </Container>
      </View>
      <Container>
        <ScrollView className={"bg-white"} showsVerticalScrollIndicator={false}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quas
            molestiae quam assumenda necessitatibus delectus quibusdam, sed enim
            maxime hic doloribus. Accusantium ipsam provident laudantium dolor,
            saepe veritatis perspiciatis dolore quas minus sit vitae
            consequuntur inventore impedit perferendis? Soluta sunt provident
            laborum iste quidem quam ex, repellat tenetur exercitationem
            suscipit beatae incidunt vel delectus eum sit architecto aperiam
            possimus aut, odio odit dolorem inventore. Sit neque libero
            praesentium odit perspiciatis quo quidem corporis quia sed, deleniti
            hic ullam, nostrum officia? Ea fugit quo facilis natus asperiores
            magnam, porro iste quas aliquid officiis dolorem quia
            necessitatibus, sint molestiae blanditiis nobis suscipit esse, alias
            beatae quis consectetur? Accusamus laboriosam dolore sapiente.
            Aliquid quia deserunt inventore aperiam vero, impedit rem nam beatae
            corrupti quae neque aut, libero necessitatibus iure ab nisi suscipit
            saepe hic velit ullam vitae! Sapiente at id quos et pariatur
            perspiciatis, debitis magni recusandae in porro numquam fugiat,
            culpa consequuntur dolorum repellendus facere, iste unde quaerat.
            Delectus laborum assumenda recusandae nisi consequuntur accusantium
            praesentium magni perspiciatis obcaecati hic at blanditiis, sit quod
            nesciunt similique sapiente adipisci, quae quaerat libero tempora
            quidem. Tempore dolor libero possimus officia ipsum quaerat tenetur
            quasi, pariatur deserunt aut harum tempora officiis! Dolorum iusto
            voluptate fugiat natus doloremque corrupti nobis, culpa cupiditate
            doloribus laudantium facilis vero laborum, quasi repellat esse earum
            cumque illo voluptas voluptatem nihil magni suscipit autem. Sequi
            iure vero illo fuga numquam asperiores. Harum odit, voluptatibus
            libero recusandae molestias porro illum fuga, accusantium sapiente
            iusto totam dolor quia. Porro eaque dicta tempore earum consectetur,
            incidunt dolorum dolorem consequuntur eligendi illo? Porro
            perspiciatis vitae suscipit nihil, odit perferendis et, accusamus
            pariatur nisi illum voluptate eius tenetur recusandae a est
            voluptatibus unde laudantium in laboriosam eos natus? Aperiam
            praesentium mollitia aspernatur laborum laudantium enim cumque iure
            minus ut eum totam unde laboriosam veritatis facilis, sint labore
            perspiciatis voluptates adipisci dolore odit atque quam architecto!
            Iste eius, mollitia nostrum voluptatem quam corrupti. Sed fugit
            nihil iusto suscipit illum. Corrupti nesciunt quaerat adipisci. Sed
            necessitatibus repudiandae architecto sit voluptatibus id aspernatur
            mollitia expedita alias eveniet quisquam quas itaque quasi iure,
            aperiam at, molestiae asperiores facere? Praesentium velit illo enim
            eius, ad illum quaerat dolorem aperiam architecto pariatur dolores,
            quo consequatur dolor est exercitationem necessitatibus at iste
            temporibus nesciunt. Officia nemo porro nihil sed, distinctio illum
            fuga esse labore? Enim animi numquam consequatur rem, atque dolorem
            esse sunt ullam temporibus aut possimus reprehenderit incidunt!
            Necessitatibus dolore saepe nisi qui aspernatur maxime quaerat
            repudiandae debitis a? Vitae maiores maxime enim, ea alias
            architecto aliquam libero ratione, ducimus perspiciatis obcaecati
            corporis deserunt. Perferendis ullam, praesentium inventore beatae
            laudantium blanditiis a enim laboriosam excepturi! Voluptatem rerum
            delectus non ullam vitae tempore dolorem rem maiores exercitationem
            distinctio, praesentium expedita iure deleniti et modi dolorum
            nostrum alias fugiat possimus ducimus pariatur facere accusamus
            quasi! Eos id minus recusandae deleniti sequi! Perferendis debitis
            temporibus labore incidunt blanditiis, minima similique repellendus
            voluptates expedita, quibusdam beatae harum aperiam? Tempore quidem
            totam vero, a, dignissimos obcaecati voluptatem tenetur voluptas
            repellat delectus quo! Cum velit, debitis voluptatum, illum ratione
            alias, soluta sapiente minus similique eius totam voluptatibus sequi
            dolore modi dolores. Libero explicabo inventore sapiente ut eveniet
            soluta eum fugiat corrupti cupiditate autem ab atque quidem cum
            exercitationem debitis earum ex ea, nemo recusandae voluptatem error
            blanditiis placeat, distinctio quia! Nemo, nihil quidem corporis
            deserunt mollitia consequuntur eligendi quo, qui alias ratione
            temporibus. Fugiat atque doloremque, odio perferendis eius culpa
            neque debitis placeat distinctio modi delectus accusantium vitae
            totam, quod cum aspernatur similique molestias enim architecto,
            rerum officia beatae numquam ipsam temporibus. Doloribus nihil natus
            impedit harum praesentium quisquam vel est animi error temporibus.
            Accusantium, eaque alias ad dignissimos ea vitae repudiandae in
            dicta inventore. Inventore minima sequi nostrum dignissimos nulla
            enim non facere nobis incidunt. Consectetur sed, aspernatur iure
            reiciendis est inventore laudantium cupiditate sit praesentium quam
            aperiam velit dolores dolorum veniam error. Perspiciatis, delectus,
            vel consequatur quam id quisquam molestias ut, nobis iste et
            corporis suscipit non expedita? Animi quas praesentium corrupti
            officia assumenda obcaecati, hic libero officiis commodi, sint quod
            dolores similique adipisci, illo possimus vel natus ullam
            exercitationem. Consectetur ex recusandae maiores odio quia quas?
            Temporibus dolor ea possimus ad eligendi distinctio minima illum
            consequatur, dolorem unde? Temporibus voluptatem quisquam ullam
            pariatur similique! Nobis quo eligendi placeat, voluptatum ab hic.
            Hic aperiam blanditiis enim quaerat autem perferendis facilis illo.
            Tempore qui facilis placeat expedita nulla voluptate sequi labore
            accusantium maxime excepturi modi corporis error consequuntur
            aliquid quas assumenda doloremque autem cumque ratione consectetur,
            esse fuga eaque eum magni! Commodi, tenetur assumenda. Libero
            accusamus exercitationem quos at! Illum, a, aut optio incidunt
            laudantium amet dolorum officia ex placeat tempore animi? Ipsum
            mollitia dicta explicabo, minima aperiam delectus molestiae nemo
            praesentium quasi deserunt obcaecati iusto, sequi vel a, dolores
            placeat nam enim asperiores doloribus atque assumenda eaque eius?
            Doloribus expedita, magnam id est corrupti laudantium iusto deserunt
            harum, aut alias molestiae sit. Doloribus laudantium facere non
            possimus ipsa expedita, omnis fugiat assumenda consequuntur repellat
            totam magnam animi quo eum ratione quis esse aspernatur nihil
            recusandae hic similique tempore quos nisi minima? Explicabo commodi
            eos dolorem dolores suscipit officiis! Nihil, voluptates libero?
            Accusamus reiciendis cumque fugiat qui libero amet nulla. Eum
            nesciunt, nam eos reprehenderit ipsum tempore, quo aut porro
            repellendus, omnis fugit? At laborum iure blanditiis omnis in sit
            temporibus reprehenderit eveniet atque debitis fugiat, cupiditate
            perspiciatis magni nihil eligendi repellat ullam asperiores modi
            eaque esse ratione quisquam molestias sunt! Error commodi provident
            facere ab suscipit odit culpa quaerat sapiente ut, eaque nisi
            quibusdam voluptatem! Aut accusantium numquam pariatur distinctio
            atque, commodi voluptatum veritatis quisquam maxime, perferendis
            ipsum explicabo aliquam nobis, et ipsam nulla exercitationem maiores
            quibusdam. Dolorum quidem accusantium eligendi, dolor excepturi
            numquam corrupti repellendus qui sit illum beatae rerum
            reprehenderit inventore laboriosam perspiciatis nobis consequatur
            culpa possimus atque? Dolores ea beatae ipsam. Voluptate odio eum
            consectetur nihil accusamus exercitationem odit temporibus
            voluptates rem recusandae! Ducimus laboriosam sint omnis nihil
            recusandae corporis necessitatibus eius impedit tempore sed
            cupiditate quo alias perspiciatis doloremque laborum labore
            laudantium, ipsam velit rem pariatur molestias esse modi. Aliquid
            atque impedit sed tenetur quos facere molestiae, temporibus
            consequuntur fugiat doloremque cum quam nam molestias eaque iusto
            reiciendis? Porro molestiae eius voluptate cumque repudiandae ea
            blanditiis necessitatibus, ad rerum maxime neque rem facilis unde
            veniam ab cupiditate fugiat tempore suscipit ducimus non
            consectetur! Eveniet quia magni reiciendis provident tenetur iste
            nam vel distinctio. Laborum at, repellendus porro dicta facilis
            quisquam laudantium culpa sed dolorum sequi voluptates ullam, magnam
            ab perferendis quasi animi est! Sed, facilis ea. Doloremque libero
            nulla, architecto amet, minus itaque laborum ratione officia
            sapiente harum dicta distinctio corrupti ab. Nulla qui beatae
            explicabo autem nostrum nemo provident quos placeat! Mollitia totam
            officiis quaerat suscipit nostrum? Illum iure mollitia unde. Ad,
            vel. Error fugit maiores dolor sunt saepe beatae, non quibusdam
            voluptas quasi ratione explicabo repellendus cupiditate veritatis
            dolore id tempore libero architecto animi velit eos eveniet ut. Sed
            dolorem sit enim nesciunt molestias, quas ut. Illo aperiam ut eos
            pariatur natus? Quia asperiores incidunt cumque qui. Non ab
            laboriosam vero adipisci eveniet! A obcaecati tenetur magni,
            temporibus ullam eaque dolores explicabo consequuntur numquam
            impedit exercitationem est nobis sit, nam quae, ad quod vero tempore
            aliquam reprehenderit! Aliquam soluta consectetur earum neque
            tempora magnam laudantium eveniet dicta, vero placeat odit eum,
            error ab repellat quo commodi nostrum quae tempore? A itaque natus,
            quo nulla amet tenetur cum ea magnam enim maxime excepturi dolor
            cumque illo similique in rerum. Neque nesciunt atque dolor qui odit
            labore a similique fugiat laboriosam repudiandae quod deleniti eum
            perspiciatis, libero quae iure! Fugit repudiandae porro at
            laboriosam recusandae nesciunt sapiente, voluptates quo minima
            accusamus molestiae facere enim. Labore illo sunt ut cupiditate,
            explicabo iusto quod commodi impedit similique aliquam nobis
            deserunt nulla ad rem error, officiis maiores vitae at. Iste ad
            exercitationem deleniti repellat odio, dicta repellendus ipsam autem
            ea voluptas delectus ab assumenda quod voluptatem, maxime mollitia
            dolorum similique aliquid laudantium? Amet, nisi ducimus in, id
            autem ab vel neque distinctio assumenda sequi aut temporibus
            delectus explicabo. Eaque necessitatibus accusamus, saepe nemo
            quaerat, nam, soluta omnis nesciunt id commodi nihil deleniti
            incidunt cupiditate enim voluptate error dolorem expedita! Fugit
            atque id porro ex veniam debitis obcaecati perferendis nulla tenetur
            laudantium error ducimus provident, quidem et eius vero. Officia
            ipsum similique cupiditate reprehenderit minus doloremque
            necessitatibus accusantium provident voluptas distinctio nulla
            laborum explicabo eius corrupti error molestias, deleniti blanditiis
            consequuntur exercitationem esse dolores pariatur placeat, alias
            est. Quia cupiditate repudiandae, architecto sunt nobis est optio
            doloribus adipisci accusamus, aliquam ad asperiores quod, odit
            voluptatem voluptates? Doloremque eius sequi saepe ad perferendis ex
            quaerat? Pariatur delectus doloribus animi perferendis et nihil
            cumque repudiandae ex dignissimos optio. Quia, blanditiis? Optio
            possimus neque libero quam, blanditiis iure eveniet saepe autem.
            Dolorum incidunt voluptatibus aut tempora veritatis ipsum ea, quia
            ipsam. Libero rem voluptate harum possimus ullam, consectetur et
            quasi necessitatibus veritatis praesentium sequi, alias iure
            quisquam ab ex placeat vel assumenda repudiandae? Nobis quibusdam
            maxime ipsa sint? Tenetur exercitationem dolor, delectus excepturi,
            nemo nostrum similique ex consequuntur tempore dignissimos fuga
            repellat est saepe laboriosam nisi earum doloribus provident magnam
            assumenda in dolorem a temporibus. Beatae deleniti aliquam adipisci
            quaerat quis, cumque cum magnam autem quidem ea. Fugit, fuga
            repellendus. Quisquam saepe quidem illo consequuntur, molestiae hic
            cupiditate nulla dolor fugit pariatur, adipisci, possimus facilis
            deleniti voluptates perferendis quos beatae repudiandae. Omnis, odio
            dolor. Magni perferendis, suscipit eligendi ut id veritatis
            corrupti. Voluptatibus tempore ipsa assumenda ullam autem fuga
            expedita itaque consectetur quas laborum labore, in aliquam
            cupiditate nostrum! Modi nulla, deserunt odit, cum praesentium
            voluptatum, adipisci ab consequuntur sunt eveniet provident ad
            veniam blanditiis aspernatur. Ut, blanditiis! Nemo illum nobis
            accusamus voluptatum voluptates officiis, odit numquam sed minima
            assumenda aspernatur perspiciatis. Adipisci, ullam? Hic omnis maxime
            recusandae deleniti enim fugiat tenetur voluptatibus quidem soluta.
            Repellendus voluptatem facilis obcaecati quia distinctio sapiente.
            Eaque doloremque soluta sapiente incidunt deleniti blanditiis nam,
            voluptatem sunt pariatur dicta, corporis labore? Laborum
            necessitatibus modi fugit delectus! Quos, illo aliquam eos
            perferendis harum quasi eum eius. Voluptates voluptate aspernatur
            commodi eaque modi. Libero excepturi repellendus fugiat? Esse ullam
            iusto, saepe obcaecati facere et culpa consequatur cum ea nulla
            illum provident ex laudantium hic delectus ad tempora dolorum quidem
            libero commodi. Soluta cumque amet modi, delectus ullam reiciendis
            asperiores quae veniam. Nobis sapiente officiis error sed aperiam
            corrupti, aliquid voluptatibus non ad in ratione incidunt.
            Doloremque, illum? Perspiciatis, consequatur. Animi, natus incidunt.
            Ut recusandae ad ducimus nisi accusamus facilis amet explicabo at
            eum. Veniam, sequi facilis labore sapiente animi recusandae vero
            dolore. Quae veritatis libero sint, nam sapiente id? Voluptatum
            consequuntur, pariatur at libero sint natus alias culpa hic?
            Exercitationem, incidunt minima, consectetur possimus dicta
            voluptates harum eveniet placeat amet blanditiis quis facilis
            nesciunt eum deserunt inventore vero fugiat assumenda nisi
            praesentium doloribus dolor ut ea! Laboriosam, unde! Reiciendis, nam
            rerum itaque repellendus voluptas perferendis, fugiat totam saepe
            cum nostrum quae facere nemo voluptatum sed veritatis numquam
            repellat ipsa, nobis dolore non iste amet accusantium. Possimus hic
            quos, voluptatem eum deleniti quod quibusdam quo aperiam maxime
            repudiandae deserunt vitae consequatur. Possimus harum quia vel fuga
            earum numquam saepe consequatur esse voluptatibus eveniet, aperiam
            dolorum ipsam quasi natus eius mollitia? Alias necessitatibus
            consequatur recusandae hic ex rem nobis nisi quam facilis
            voluptatibus incidunt eum illo libero, delectus eveniet laboriosam
            aperiam assumenda animi at voluptates? Et vel sunt, provident rem,
            distinctio, vitae minus expedita ad architecto sint beatae quibusdam
            facilis dolorum animi. Reprehenderit dolore, distinctio dicta, qui
            in aliquam debitis exercitationem quis voluptas atque asperiores
            laborum optio est dolor voluptatum. Commodi tempore excepturi
            voluptatem, fugit non a quos sint, facere dolorum, harum quidem.
            Quidem iste quas nulla voluptatem minima laudantium neque ratione
            commodi! Assumenda harum, reiciendis delectus adipisci nostrum omnis
            itaque? Laborum, aspernatur nulla sequi perspiciatis culpa veniam
            at. Amet expedita, distinctio eum natus quam aliquid consectetur
            commodi asperiores repellat odit inventore culpa nisi, magni, quod
            sequi. Voluptatibus consequuntur quia eius, minus, saepe suscipit
            eligendi, repellendus cum eveniet dolor eos amet totam minima
            veritatis facere voluptas sint! Eos blanditiis consequatur magni
            nulla impedit excepturi porro perferendis, magnam laudantium
            doloremque maxime eum recusandae minus consectetur accusamus
            consequuntur tempore quidem.
          </Text>
        </ScrollView>
      </Container>
    </View>
  );
};
export default Home;
