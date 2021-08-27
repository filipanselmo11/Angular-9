import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {SplitterModule} from 'primeng/splitter';
import {TableModule} from 'primeng/table';
import {SkeletonModule} from 'primeng/skeleton';
import {DividerModule} from 'primeng/divider';

import { HomeComponent } from './pages/home/home.component';
import { DotaComponent } from './pages/dota/dota.component';
import { LolComponent } from './pages/lol/lol.component';
import { AbbadonComponent } from './pages/abbadon/abbadon.component';
import { AlchemistComponent } from './pages/alchemist/alchemist.component';
import { AxeComponent } from './pages/axe/axe.component';
import { BeastmasterComponent } from './pages/beastmaster/beastmaster.component';
import { BrewmasterComponent } from './pages/brewmaster/brewmaster.component';
import { CentauroComponent } from './pages/centauro/centauro.component';
import { CkComponent } from './pages/ck/ck.component';
import { ClockwerkComponent } from './pages/clockwerk/clockwerk.component';
import { DawnbreakerComponent } from './pages/dawnbreaker/dawnbreaker.component';
import { DoomComponent } from './pages/doom/doom.component';
import { DkComponent } from './pages/dk/dk.component';
import { EarthspiritComponent } from './pages/earthspirit/earthspirit.component';
import { EarthshakerComponent } from './pages/earthshaker/earthshaker.component';
import { EldertitanComponent } from './pages/eldertitan/eldertitan.component';
import { HuskarComponent } from './pages/huskar/huskar.component';
import { IoComponent } from './pages/io/io.component';
import { KunkkaComponent } from './pages/kunkka/kunkka.component';
import { LegioncommanderComponent } from './pages/legioncommander/legioncommander.component';
import { LifestealerComponent } from './pages/lifestealer/lifestealer.component';
import { LycanComponent } from './pages/lycan/lycan.component';
import { MagnusComponent } from './pages/magnus/magnus.component';
import { MarteComponent } from './pages/marte/marte.component';
import { NightstalkerComponent } from './pages/nightstalker/nightstalker.component';
import { OmniknightComponent } from './pages/omniknight/omniknight.component';
import { PhoenixComponent } from './pages/phoenix/phoenix.component';
import { PudgeComponent } from './pages/pudge/pudge.component';
import { SkComponent } from './pages/sk/sk.component';
import { SlardarComponent } from './pages/slardar/slardar.component';
import { SnapfireComponent } from './pages/snapfire/snapfire.component';
import { SbComponent } from './pages/sb/sb.component';
import { SvenComponent } from './pages/sven/sven.component';
import { TidehunterComponent } from './pages/tidehunter/tidehunter.component';
import { TimbersawComponent } from './pages/timbersaw/timbersaw.component';
import { TinyComponent } from './pages/tiny/tiny.component';
import { TpComponent } from './pages/tp/tp.component';
import { TuskComponent } from './pages/tusk/tusk.component';
import { UnderlordComponent } from './pages/underlord/underlord.component';
import { AmComponent } from './pages/am/am.component';
import { AcComponent } from './pages/ac/ac.component';
import { BloodseekerComponent } from './pages/bloodseeker/bloodseeker.component';
import { BhComponent } from './pages/bh/bh.component';
import { BroodmotherComponent } from './pages/broodmother/broodmother.component';
import { ClinkzComponent } from './pages/clinkz/clinkz.component';
import { DrComponent } from './pages/dr/dr.component';
import { EmberspiritComponent } from './pages/emberspirit/emberspirit.component';
import { FvComponent } from './pages/fv/fv.component';
import { GyrocopterComponent } from './pages/gyrocopter/gyrocopter.component';
import { HoodwinkComponent } from './pages/hoodwink/hoodwink.component';
import { JuggernautComponent } from './pages/juggernaut/juggernaut.component';
import { LdComponent } from './pages/ld/ld.component';
import { LunaComponent } from './pages/luna/luna.component';
import { MedusaComponent } from './pages/medusa/medusa.component';
import { MeepoComponent } from './pages/meepo/meepo.component';
import { MiranaComponent } from './pages/mirana/mirana.component';
import { MkComponent } from './pages/mk/mk.component';
import { MorphlingComponent } from './pages/morphling/morphling.component';
import { NagasirenComponent } from './pages/nagasiren/nagasiren.component';
import { NyxassassinComponent } from './pages/nyxassassin/nyxassassin.component';
import { PaComponent } from './pages/pa/pa.component';
import { PlComponent } from './pages/pl/pl.component';
import { RazorComponent } from './pages/razor/razor.component';
import { RikiComponent } from './pages/riki/riki.component';
import { SfComponent } from './pages/sf/sf.component';
import { SlarkComponent } from './pages/slark/slark.component';
import { SniperComponent } from './pages/sniper/sniper.component';
import { SpectreComponent } from './pages/spectre/spectre.component';
import { TaComponent } from './pages/ta/ta.component';
import { TerrorbladeComponent } from './pages/terrorblade/terrorblade.component';
import { TwComponent } from './pages/tw/tw.component';
import { UrsaComponent } from './pages/ursa/ursa.component';
import { VengefulspiritComponent } from './pages/vengefulspirit/vengefulspirit.component';
import { VenomancerComponent } from './pages/venomancer/venomancer.component';
import { ViperComponent } from './pages/viper/viper.component';
import { WeaverComponent } from './pages/weaver/weaver.component';
import { AaComponent } from './pages/aa/aa.component';
import { BaneComponent } from './pages/bane/bane.component';
import { BatriderComponent } from './pages/batrider/batrider.component';
import { ChenComponent } from './pages/chen/chen.component';
import { CmComponent } from './pages/cm/cm.component';
import { DsComponent } from './pages/ds/ds.component';
import { DwComponent } from './pages/dw/dw.component';
import { DazzleComponent } from './pages/dazzle/dazzle.component';
import { DpComponent } from './pages/dp/dp.component';
import { DisruptorComponent } from './pages/disruptor/disruptor.component';
import { EnchantreesComponent } from './pages/enchantrees/enchantrees.component';
import { EnigmaComponent } from './pages/enigma/enigma.component';
import { InvokerComponent } from './pages/invoker/invoker.component';
import { JakiroComponent } from './pages/jakiro/jakiro.component';
import { KeeperComponent } from './pages/keeper/keeper.component';
import { LeshracComponent } from './pages/leshrac/leshrac.component';
import { LichComponent } from './pages/lich/lich.component';
import { LinaComponent } from './pages/lina/lina.component';
import { LionComponent } from './pages/lion/lion.component';
import { NpComponent } from './pages/np/np.component';
import { NecrophosComponent } from './pages/necrophos/necrophos.component';
import { OgremagiComponent } from './pages/ogremagi/ogremagi.component';
import { OracleComponent } from './pages/oracle/oracle.component';
import { OdComponent } from './pages/od/od.component';
import { PuckComponent } from './pages/puck/puck.component';
import { PugnaComponent } from './pages/pugna/pugna.component';
import { QopComponent } from './pages/qop/qop.component';
import { RubickComponent } from './pages/rubick/rubick.component';
import { ShadowdemonComponent } from './pages/shadowdemon/shadowdemon.component';
import { ShadowshamanComponent } from './pages/shadowshaman/shadowshaman.component';
import { SilencerComponent } from './pages/silencer/silencer.component';
import { SkywrathmageComponent } from './pages/skywrathmage/skywrathmage.component';
import { StormspiritComponent } from './pages/stormspirit/stormspirit.component';
import { TechiesComponent } from './pages/techies/techies.component';
import { TinkerComponent } from './pages/tinker/tinker.component';
import { VisageComponent } from './pages/visage/visage.component';
import { VoidspiritComponent } from './pages/voidspirit/voidspirit.component';
import { WarlockComponent } from './pages/warlock/warlock.component';
import { WindrangerComponent } from './pages/windranger/windranger.component';
import { WinterwyvernComponent } from './pages/winterwyvern/winterwyvern.component';
import { WichdoctorComponent } from './pages/wichdoctor/wichdoctor.component';
import { ZeusComponent } from './pages/zeus/zeus.component';
import { BristlebackComponent } from './pages/bristleback/bristleback.component';
import { UndyingComponent } from './pages/undying/undying.component';
import { WkComponent } from './pages/wk/wk.component';
import { AkaliComponent } from './pages/akali/akali.component';
import { FizzComponent } from './pages/fizz/fizz.component';
import { KassadinComponent } from './pages/kassadin/kassadin.component';
import { KatarinaComponent } from './pages/katarina/katarina.component';
import { KhazixComponent } from './pages/khazix/khazix.component';
import { LeblancComponent } from './pages/leblanc/leblanc.component';
import { NidaleeComponent } from './pages/nidalee/nidalee.component';
import { RengarComponent } from './pages/rengar/rengar.component';
import { ShacoComponent } from './pages/shaco/shaco.component';
import { TalonComponent } from './pages/talon/talon.component';
import { ZedComponent } from './pages/zed/zed.component';
import { EkkoComponent } from './pages/ekko/ekko.component';
import { FioraComponent } from './pages/fiora/fiora.component';
import { JaxComponent } from './pages/jax/jax.component';
import { MasteryiComponent } from './pages/masteryi/masteryi.component';
import { RivenComponent } from './pages/riven/riven.component';
import { TryndamereComponent } from './pages/tryndamere/tryndamere.component';
import { YasuoComponent } from './pages/yasuo/yasuo.component';
import { YoneComponent } from './pages/yone/yone.component';
import { AhriComponent } from './pages/ahri/ahri.component';
import { AnnieComponent } from './pages/annie/annie.component';
import { BrandComponent } from './pages/brand/brand.component';
import { LissandraComponent } from './pages/lissandra/lissandra.component';
import { LuxComponent } from './pages/lux/lux.component';
import { SyndraComponent } from './pages/syndra/syndra.component';
import { VeigarComponent } from './pages/veigar/veigar.component';
import { ViktorComponent } from './pages/viktor/viktor.component';
import { TfComponent } from './pages/tf/tf.component';
import { AurelionsolComponent } from './pages/aurelionsol/aurelionsol.component';
import { CassiopeiaComponent } from './pages/cassiopeia/cassiopeia.component';
import { GangplankComponent } from './pages/gangplank/gangplank.component';
import { KarthusComponent } from './pages/karthus/karthus.component';
import { MalzaharComponent } from './pages/malzahar/malzahar.component';
import { RumbleComponent } from './pages/rumble/rumble.component';
import { RyzeComponent } from './pages/ryze/ryze.component';
import { SwainComponent } from './pages/swain/swain.component';
import { VladimirComponent } from './pages/vladimir/vladimir.component';
import { JayceComponent } from './pages/jayce/jayce.component';
import { VarusComponent } from './pages/varus/varus.component';
import { VelkozComponent } from './pages/velkoz/velkoz.component';
import { XerathComponent } from './pages/xerath/xerath.component';
import { ZiggsComponent } from './pages/ziggs/ziggs.component';
import { NasusComponent } from './pages/nasus/nasus.component';
import { DariusComponent } from './pages/darius/darius.component';
import { MordekaiserComponent } from './pages/mordekaiser/mordekaiser.component';
import { IllaoiComponent } from './pages/illaoi/illaoi.component';
import { GarenComponent } from './pages/garen/garen.component';
import { ShyvanaComponent } from './pages/shyvana/shyvana.component';
import { UdyrComponent } from './pages/udyr/udyr.component';
import { DrmundoComponent } from './pages/drmundo/drmundo.component';
import { VolibearComponent } from './pages/volibear/volibear.component';
import { YorickComponent } from './pages/yorick/yorick.component';
import { ViComponent } from './pages/vi/vi.component';
import { XinzhaoComponent } from './pages/xinzhao/xinzhao.component';
import { NocturneComponent } from './pages/nocturne/nocturne.component';
import { PantheonComponent } from './pages/pantheon/pantheon.component';
import { JarvanComponent } from './pages/jarvan/jarvan.component';
import { WukongComponent } from './pages/wukong/wukong.component';
import { WarwickComponent } from './pages/warwick/warwick.component';
import { RenektonComponent } from './pages/renekton/renekton.component';
import { EliseComponent } from './pages/elise/elise.component';
import { HecarimComponent } from './pages/hecarim/hecarim.component';
import { LeesinComponent } from './pages/leesin/leesin.component';
import { IreliaComponent } from './pages/irelia/irelia.component';
import { AatroxComponent } from './pages/aatrox/aatrox.component';
import { EvelynnComponent } from './pages/evelynn/evelynn.component';
import { DianaComponent } from './pages/diana/diana.component';
import { VayneComponent } from './pages/vayne/vayne.component';
import { CaitlynComponent } from './pages/caitlyn/caitlyn.component';
import { AsheComponent } from './pages/ashe/ashe.component';
import { CorkiComponent } from './pages/corki/corki.component';
import { DravenComponent } from './pages/draven/draven.component';
import { JinxComponent } from './pages/jinx/jinx.component';
import { KalistaComponent } from './pages/kalista/kalista.component';
import { KogmawComponent } from './pages/kogmaw/kogmaw.component';
import { LucianComponent } from './pages/lucian/lucian.component';
import { MfComponent } from './pages/mf/mf.component';
import { SivirComponent } from './pages/sivir/sivir.component';
import { TristanaComponent } from './pages/tristana/tristana.component';
import { KindredComponent } from './pages/kindred/kindred.component';
import { EzrealComponent } from './pages/ezreal/ezreal.component';
import { TwitchComponent } from './pages/twitch/twitch.component';
import { QuinnComponent } from './pages/quinn/quinn.component';
import { JhinComponent } from './pages/jhin/jhin.component';
import { GravesComponent } from './pages/graves/graves.component';
import { KayleComponent } from './pages/kayle/kayle.component';
import { AzirComponent } from './pages/azir/azir.component';
import { MinignarComponent } from './pages/minignar/minignar.component';
import { JannaComponent } from './pages/janna/janna.component';
import { NamiComponent } from './pages/nami/nami.component';
import { SonaComponent } from './pages/sona/sona.component';
import { SorakaComponent } from './pages/soraka/soraka.component';
import { LuluComponent } from './pages/lulu/lulu.component';
import { BardoComponent } from './pages/bardo/bardo.component';
import { ZileanComponent } from './pages/zilean/zilean.component';
import { KarmaComponent } from './pages/karma/karma.component';
import { TaricComponent } from './pages/taric/taric.component';
import { AniviaComponent } from './pages/anivia/anivia.component';
import { ZyraComponent } from './pages/zyra/zyra.component';
import { HeimerdingerComponent } from './pages/heimerdinger/heimerdinger.component';
import { OrianaComponent } from './pages/oriana/oriana.component';
import { MorganaComponent } from './pages/morgana/morgana.component';
import { TeemoComponent } from './pages/teemo/teemo.component';
import { TaliyahComponent } from './pages/taliyah/taliyah.component';
import { MalphiteComponent } from './pages/malphite/malphite.component';
import { AmumuComponent } from './pages/amumu/amumu.component';
import { LeonaComponent } from './pages/leona/leona.component';
import { ZacComponent } from './pages/zac/zac.component';
import { GragasComponent } from './pages/gragas/gragas.component';
import { RammusComponent } from './pages/rammus/rammus.component';
import { MegagnarComponent } from './pages/megagnar/megagnar.component';
import { SejuaniComponent } from './pages/sejuani/sejuani.component';
import { ReksaiComponent } from './pages/reksai/reksai.component';
import { SionComponent } from './pages/sion/sion.component';
import { NautilusComponent } from './pages/nautilus/nautilus.component';
import { SkarnerComponent } from './pages/skarner/skarner.component';
import { BraumComponent } from './pages/braum/braum.component';
import { NunuComponent } from './pages/nunu/nunu.component';
import { TkComponent } from './pages/tk/tk.component';
import { MaokaiComponent } from './pages/maokai/maokai.component';
import { ShenComponent } from './pages/shen/shen.component';
import { TreshComponent } from './pages/tresh/tresh.component';
import { AlistarComponent } from './pages/alistar/alistar.component';
import { PoppyComponent } from './pages/poppy/poppy.component';
import { GalioComponent } from './pages/galio/galio.component';
import { ChogathComponent } from './pages/chogath/chogath.component';
import { BlitzcrankComponent } from './pages/blitzcrank/blitzcrank.component';
import { SingedComponent } from './pages/singed/singed.component';
import { FiddlesticksComponent } from './pages/fiddlesticks/fiddlesticks.component';
import { KennenComponent } from './pages/kennen/kennen.component';
import { UrgotComponent } from './pages/urgot/urgot.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DotaComponent,
    LolComponent,
    AbbadonComponent,
    AlchemistComponent,
    AxeComponent,
    BeastmasterComponent,
    BrewmasterComponent,
    CentauroComponent,
    CkComponent,
    ClockwerkComponent,
    DawnbreakerComponent,
    DoomComponent,
    DkComponent,
    EarthspiritComponent,
    EarthshakerComponent,
    EldertitanComponent,
    HuskarComponent,
    IoComponent,
    KunkkaComponent,
    LegioncommanderComponent,
    LifestealerComponent,
    LycanComponent,
    MagnusComponent,
    MarteComponent,
    NightstalkerComponent,
    OmniknightComponent,
    PhoenixComponent,
    PudgeComponent,
    SkComponent,
    SlardarComponent,
    SnapfireComponent,
    SbComponent,
    SvenComponent,
    TidehunterComponent,
    TimbersawComponent,
    TinyComponent,
    TpComponent,
    TuskComponent,
    UnderlordComponent,
    AmComponent,
    AcComponent,
    BloodseekerComponent,
    BhComponent,
    BroodmotherComponent,
    ClinkzComponent,
    DrComponent,
    EmberspiritComponent,
    FvComponent,
    GyrocopterComponent,
    HoodwinkComponent,
    JuggernautComponent,
    LdComponent,
    LunaComponent,
    MedusaComponent,
    MeepoComponent,
    MiranaComponent,
    MkComponent,
    MorphlingComponent,
    NagasirenComponent,
    NyxassassinComponent,
    PaComponent,
    PlComponent,
    RazorComponent,
    RikiComponent,
    SfComponent,
    SlarkComponent,
    SniperComponent,
    SpectreComponent,
    TaComponent,
    TerrorbladeComponent,
    TwComponent,
    UrsaComponent,
    VengefulspiritComponent,
    VenomancerComponent,
    ViperComponent,
    WeaverComponent,
    AaComponent,
    BaneComponent,
    BatriderComponent,
    ChenComponent,
    CmComponent,
    DsComponent,
    DwComponent,
    DazzleComponent,
    DpComponent,
    DisruptorComponent,
    EnchantreesComponent,
    EnigmaComponent,
    InvokerComponent,
    JakiroComponent,
    KeeperComponent,
    LeshracComponent,
    LichComponent,
    LinaComponent,
    LionComponent,
    NpComponent,
    NecrophosComponent,
    OgremagiComponent,
    OracleComponent,
    OdComponent,
    PuckComponent,
    PugnaComponent,
    QopComponent,
    RubickComponent,
    ShadowdemonComponent,
    ShadowshamanComponent,
    SilencerComponent,
    SkywrathmageComponent,
    StormspiritComponent,
    TechiesComponent,
    TinkerComponent,
    VisageComponent,
    VoidspiritComponent,
    WarlockComponent,
    WindrangerComponent,
    WinterwyvernComponent,
    WichdoctorComponent,
    ZeusComponent,
    BristlebackComponent,
    UndyingComponent,
    WkComponent,
    AkaliComponent,
    FizzComponent,
    KassadinComponent,
    KatarinaComponent,
    KhazixComponent,
    LeblancComponent,
    NidaleeComponent,
    RengarComponent,
    ShacoComponent,
    TalonComponent,
    ZedComponent,
    EkkoComponent,
    FioraComponent,
    JaxComponent,
    MasteryiComponent,
    RivenComponent,
    TryndamereComponent,
    YasuoComponent,
    YoneComponent,
    AhriComponent,
    AnnieComponent,
    BrandComponent,
    LissandraComponent,
    LuxComponent,
    SyndraComponent,
    VeigarComponent,
    ViktorComponent,
    TfComponent,
    AurelionsolComponent,
    CassiopeiaComponent,
    GangplankComponent,
    KarthusComponent,
    MalzaharComponent,
    RumbleComponent,
    RyzeComponent,
    SwainComponent,
    VladimirComponent,
    JayceComponent,
    VarusComponent,
    VelkozComponent,
    XerathComponent,
    ZiggsComponent,
    NasusComponent,
    DariusComponent,
    MordekaiserComponent,
    IllaoiComponent,
    GarenComponent,
    ShyvanaComponent,
    UdyrComponent,
    DrmundoComponent,
    VolibearComponent,
    YorickComponent,
    ViComponent,
    XinzhaoComponent,
    NocturneComponent,
    PantheonComponent,
    JarvanComponent,
    WukongComponent,
    WarwickComponent,
    RenektonComponent,
    EliseComponent,
    HecarimComponent,
    LeesinComponent,
    IreliaComponent,
    AatroxComponent,
    EvelynnComponent,
    DianaComponent,
    VayneComponent,
    CaitlynComponent,
    AsheComponent,
    CorkiComponent,
    DravenComponent,
    JinxComponent,
    KalistaComponent,
    KogmawComponent,
    LucianComponent,
    MfComponent,
    SivirComponent,
    TristanaComponent,
    KindredComponent,
    EzrealComponent,
    TwitchComponent,
    QuinnComponent,
    JhinComponent,
    GravesComponent,
    KayleComponent,
    AzirComponent,
    MinignarComponent,
    JannaComponent,
    NamiComponent,
    SonaComponent,
    SorakaComponent,
    LuluComponent,
    BardoComponent,
    ZileanComponent,
    KarmaComponent,
    TaricComponent,
    AniviaComponent,
    ZyraComponent,
    HeimerdingerComponent,
    OrianaComponent,
    MorganaComponent,
    TeemoComponent,
    TaliyahComponent,
    MalphiteComponent,
    AmumuComponent,
    LeonaComponent,
    ZacComponent,
    GragasComponent,
    RammusComponent,
    MegagnarComponent,
    SejuaniComponent,
    ReksaiComponent,
    SionComponent,
    NautilusComponent,
    SkarnerComponent,
    BraumComponent,
    NunuComponent,
    TkComponent,
    MaokaiComponent,
    ShenComponent,
    TreshComponent,
    AlistarComponent,
    PoppyComponent,
    GalioComponent,
    ChogathComponent,
    BlitzcrankComponent,
    SingedComponent,
    FiddlesticksComponent,
    KennenComponent,
    UrgotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    SplitterModule,
    TableModule,
    SkeletonModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
