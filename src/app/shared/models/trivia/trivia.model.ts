export interface Trivia {
  id : number;
  title : string;
  subtitle? : string;
  avatarSrc? : string;
  avatarAlt? : string;
  imageSrc? : string;
  imageAlt? : string;
  description : string;
  createdAt? : Date;
}
