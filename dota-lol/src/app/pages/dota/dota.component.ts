import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dota',
  templateUrl: './dota.component.html',
  styleUrls: ['./dota.component.css']
})
export class DotaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToAbbadon(): void {
    this.router.navigate(['/abbadon']);
  }

  navigateToAlchemist(): void {
    this.router.navigate(['/alchemist']);
  }
  navigateToAxe(): void {
    this.router.navigate(['/axe']);
  }
  navigateToBeastmaster(): void {
    this.router.navigate(['/beastmaster']);
  }
  navigateToBrewmaster(): void {
    this.router.navigate(['/brewmaster']);
  }
  navigateToBristleback(): void {
    this.router.navigate(['/bristleback']);
  }
  navigateToCentauro(): void {
    this.router.navigate(['/centauro']);
  }
  navigateToCk(): void {
    this.router.navigate(['/ck']);
  }
  navigateToClockwerk(): void {
    this.router.navigate(['/clockwerk']);
  }
  navigateToDawnbreaker(): void {
    this.router.navigate(['/dawnbreaker']);
  }
  navigateToDoom(): void {
    this.router.navigate(['/doom']);
  }
  navigateToDk(): void {
    this.router.navigate(['/dk']);
  }
  navigateToEarthspirit(): void {
    this.router.navigate(['/earthspirit']);
  }
  navigateToEarthshaker(): void {
    this.router.navigate(['/earthshaker']);
  }
  navigateToEldertitan(): void {
    this.router.navigate(['/eldertitan']);
  }
  navigateToHuskar(): void {
    this.router.navigate(['/huskar']);
  }
  navigateToIo(): void {
    this.router.navigate(['/io']);
  }
  navigateToKunkka(): void {
    this.router.navigate(['/kunkka']);
  }
  navigateToLegioncommander(): void {
    this.router.navigate(['/legioncommander']);
  }
  navigateToLifestealer(): void {
    this.router.navigate(['/lifestealer']);
  }
  navigateToLycan(): void {
    this.router.navigate(['/lycan']);
  }
  navigateToMagnus(): void {
    this.router.navigate(['/magnus']);
  }
  navigateToMarte(): void {
    this.router.navigate(['/marte']);
  }
  navigateToNightstalker(): void {
    this.router.navigate(['/nightstalker']);
  }
  navigateToOmniknight(): void {
    this.router.navigate(['/omniknight']);
  }
  navigateToPhoenix(): void {
    this.router.navigate(['/phoenix']);
  }
  navigateToPudge(): void {
    this.router.navigate(['/pudge']);
  }
  navigateToSk(): void {
    this.router.navigate(['/sk']);
  }
  navigateToSlardar(): void {
    this.router.navigate(['/slardar']);
  }
  navigateToSnapfire(): void {
    this.router.navigate(['/snapfire']);
  }
  navigateToSb(): void {
    this.router.navigate(['/sb']);
  }
  navigateToSven(): void {
    this.router.navigate(['/sven']);
  }
  navigateToTidehunter(): void {
    this.router.navigate(['/tidehunter']);
  }
  navigateToTimbersaw(): void {
    this.router.navigate(['/timbersaw']);
  }
  navigateToTiny(): void {
    this.router.navigate(['/tiny']);
  }
  navigateToTp(): void {
    this.router.navigate(['/tp']);
  }
  navigateToTusk(): void {
    this.router.navigate(['/tusk']);
  }
  navigateToUnderlord(): void {
    this.router.navigate(['/underlord']);
  }
  navigateToUndying(): void {
    this.router.navigate(['/undying']);
  }
  navigateToWk(): void {
    this.router.navigate(['/wk']);
  }navigateToAm(): void {
    this.router.navigate(['/am']);
  }navigateToAc(): void {
    this.router.navigate(['/ac']);
  }navigateToBloodseeker(): void {
    this.router.navigate(['/bloodseeker']);
  }navigateToBh(): void {
    this.router.navigate(['/bh']);
  }navigateToBroodmother(): void {
    this.router.navigate(['/broodmother']);
  }navigateToClinkz(): void {
    this.router.navigate(['/clinkz']);
  }navigateToDr(): void {
    this.router.navigate(['/dr']);
  }navigateToEmberspirit(): void {
    this.router.navigate(['/emberspirit']);
  }navigateToFv(): void {
    this.router.navigate(['/fv']);
  }navigateToGyrocopter(): void {
    this.router.navigate(['/gyrocopter']);
  }navigateToHoodwink(): void {
    this.router.navigate(['/hoodwink']);
  }navigateToJuggernaut(): void {
    this.router.navigate(['/juggernaut']);
  }navigateToLd(): void {
    this.router.navigate(['/ld']);
  }navigateToLuna(): void {
    this.router.navigate(['/luna']);
  }navigateToMedusa(): void {
    this.router.navigate(['/medusa']);
  }navigateToMeepo(): void {
    this.router.navigate(['/meepo']);
  }navigateToMirana(): void {
    this.router.navigate(['/mirana']);
  }navigateToMk(): void {
    this.router.navigate(['/mk']);
  }
  navigateToMorphling(): void {
    this.router.navigate(['/morphling']);
  }
  navigateToNagasiren(): void {
    this.router.navigate(['/nagasiren']);
  }
  navigateToNyxassassin(): void {
    this.router.navigate(['/nyxassassin']);
  }
  navigateToPa(): void {
    this.router.navigate(['/pa']);
  }
  navigateToPl(): void {
    this.router.navigate(['/pl']);
  }
  navigateToRazor(): void {
    this.router.navigate(['/razor']);
  }
  navigateToRiki(): void {
    this.router.navigate(['/riki']);
  }
  navigateToSf(): void {
    this.router.navigate(['/sf']);
  }
  navigateToSlark(): void {
    this.router.navigate(['/slark']);
  }
  navigateToSniper(): void {
    this.router.navigate(['/sniper']);
  }
  navigateToSpectre(): void {
    this.router.navigate(['/spectre']);
  }
  navigateToTa(): void {
    this.router.navigate(['/ta']);
  }
  navigateToTerrorblade(): void {
    this.router.navigate(['/terrorblade']);
  }
  navigateToTw(): void {
    this.router.navigate(['/tw']);
  }
  navigateToUrsa(): void {
    this.router.navigate(['/ursa']);
  }
  navigateToVegenfulspirit(): void {
    this.router.navigate(['/vengefulspirit']);
  }
  navigateToVenomancer(): void {
    this.router.navigate(['/venomancer']);
  }
  navigateToViper(): void {
    this.router.navigate(['/viper']);
  }
  navigateToWeaver(): void {
    this.router.navigate(['/weaver']);
  }
  navigateToAa(): void {
    this.router.navigate(['/aa']);
  }
  navigateToBane(): void {
    this.router.navigate(['/bane']);
  }
  navigateToBatrider(): void {
    this.router.navigate(['/batrider']);
  }
  navigateToChen(): void {
    this.router.navigate(['/chen']);
  }
  navigateToCm(): void {
    this.router.navigate(['/cm']);
  }
  navigateToDs(): void {
    this.router.navigate(['/ds']);
  }
  navigateToDw(): void {
    this.router.navigate(['/dw']);
  }
  navigateToDazzle(): void {
    this.router.navigate(['/dazzle']);
  }
  navigateToDp(): void {
    this.router.navigate(['/dp']);
  }
  navigateToDisruptor(): void {
    this.router.navigate(['/disruptor']);
  }
  navigateToEnchantrees(): void {
    this.router.navigate(['/enchantrees']);
  }
  navigateToEnigma(): void {
    this.router.navigate(['/enigma']);
  }
  navigateToInvoker(): void {
    this.router.navigate(['/invoker']);
  }
  navigateToJakiro(): void {
    this.router.navigate(['/jakiro']);
  }
  navigateToKeeper(): void {
    this.router.navigate(['/keeper']);
  }
  navigateToLeshrac(): void {
    this.router.navigate(['/leshrac']);
  }
  navigateToLich(): void {
    this.router.navigate(['/lich']);
  }
  navigateToLina(): void {
    this.router.navigate(['/lina']);
  }
  navigateToLion(): void {
    this.router.navigate(['/lion']);
  }
  navigateToNp(): void {
    this.router.navigate(['/np']);
  }
  navigateToNecrophos(): void {
    this.router.navigate(['/necrophos']);
  }
  navigateToOgremagi(): void {
    this.router.navigate(['/ogremagi']);
  }
  navigateToOracle(): void {
    this.router.navigate(['/oracle']);
  }
  navigateToOd(): void {
    this.router.navigate(['/od']);
  }
  navigateToPuck(): void {
    this.router.navigate(['/puck']);
  }
  navigateToPugna(): void {
    this.router.navigate(['/pugna']);
  }
  navigateToQop(): void {
    this.router.navigate(['/qop']);
  }
  navigateToRubick(): void {
    this.router.navigate(['/rubick']);
  }
  navigateToShadowdemon(): void {
    this.router.navigate(['/shadowdemon']);
  }
  navigateToShadowshaman(): void {
    this.router.navigate(['/shadowshaman']);
  }
  navigateToSilencer(): void {
    this.router.navigate(['/silencer']);
  }
  navigateToSkywrathmage(): void {
    this.router.navigate(['/skywrathmage']);
  }
  navigateToStormspirit(): void {
    this.router.navigate(['/stormspirit']);
  }
  navigateToTechies(): void {
    this.router.navigate(['/techies']);
  }
  navigateToTinker(): void {
    this.router.navigate(['/tinker']);
  }
  navigateToVisage(): void {
    this.router.navigate(['/visage']);
  }
  navigateToVoidspirit(): void {
    this.router.navigate(['/voidspirit']);
  }
  navigateToWarlock(): void {
    this.router.navigate(['/warlock']);
  }
  navigateToWindranger(): void {
    this.router.navigate(['/windranger']);
  }
  navigateToWinterwyvern(): void {
    this.router.navigate(['/winterwyvern']);
  }
  navigateToWichdoctor(): void {
    this.router.navigate(['/wichdoctor']);
  }
  navigateToZeus(): void {
    this.router.navigate(['/zeus']);
  }



  

}
