// LINK: local port https://www.notion.so/coconutsilo/33f1bb1811c8423aad1143d91de58d58
export const SERVICE_INFO = {
  MOVE_ADMIN: Object.freeze({
    objectName: "MOVE_ADMIN",
    serviceName: "moveAdmin",
    packageName: "kokkok-move-admin",
    cookieName: "KKE_ADMIN",
    port: 3030,
    needsTranslation: true,
    refreshTokenUrlSuffix: "/auth/tokens",
  }),
  MOVE_IOT: Object.freeze({
    objectName: "MOVE_IOT",
    serviceName: "moveIot",
    packageName: "kokkok-move-iot",
    cookieName: "KOKKOK_IoT",
    port: 3033,
    needsTranslation: false,
    refreshTokenUrlSuffix: "/iot/tokens",
  }),
  MOVE_RANKING: Object.freeze({
    objectName: "MOVE_RANKING",
    serviceName: "moveRanking",
    packageName: "kokkok-move-ranking",
    cookieName: "",
    port: 3034,
    needsTranslation: false,
    refreshTokenUrlSuffix: "",
  }),
  LOGISTICS_ADMIN: Object.freeze({
    objectName: "LOGISTICS_ADMIN",
    serviceName: "logisticsAdmin",
    packageName: "kokkok-logistics-admin",
    cookieName: "KOKKOK_LOGISTICS",
    port: 3032,
    needsTranslation: true,
    refreshTokenUrlSuffix: "/auth/tokens",
  }),
  CAR_ADMIN: Object.freeze({
    objectName: "CAR_ADMIN",
    serviceName: "carAdmin",
    packageName: "kokkok-car-admin",
    cookieName: "KOKKOK_CAR_ADMIN",
    port: 3035,
    needsTranslation: true,
    refreshTokenUrlSuffix: "/auth/tokens",
  }),
  CAR_INSPECTION: Object.freeze({
    objectName: "CAR_INSPECTION",
    serviceName: "carInspection",
    packageName: "kokkok-car-inspection",
    cookieName: "KOKKOK_CAR_INSPECTION",
    port: 3036,
    needsTranslation: true,
    refreshTokenUrlSuffix: "/auth/tokens",
  }),
  ECOMMERCE_ADMIN: Object.freeze({
    objectName: "ECOMMERCE_ADMIN",
    serviceName: "eCommerceAdmin",
    packageName: "kokkok-e-commerce-admin",
    cookieName: "KOKKOK_ECOMMERCE_ADMIN",
    port: 3037,
    needsTranslation: true,
    refreshTokenUrlSuffix: "/auth/tokens",
  }),
  MEMBERSHIP_ADMIN: Object.freeze({
    objectName: "MEMBERSHIP_ADMIN",
    serviceName: "membershipAdmin",
    packageName: "kokkok-membership-admin",
    cookieName: "KOKKOK_MEMBERSHIP_ADMIN",
    port: 3038,
    needsTranslation: true,
    refreshTokenUrlSuffix: "/auth/tokens", // TODO: 확인 필요
  }),
};

export const SERVICE_NAMES = Object.values(SERVICE_INFO).map(
  (service) => service.serviceName,
);
