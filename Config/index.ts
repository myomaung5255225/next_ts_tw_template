export const b2bConfig = {
    apiPath: {
      bzEntry:
        process.env.NODE_ENV === 'development'
          ? 'https://b2bapi.gemtechmyanmar.com/dev/api/v1'
          : 'https://b2bapi.gemtechmyanmar.com/dev/api/v1',
      bzEntry2:
        process.env.NODE_ENV === 'development'
          ? 'https://4xj2wy1zr0.execute-api.ap-southeast-1.amazonaws.com/dev/api/v1'
          : 'https://4xj2wy1zr0.execute-api.ap-southeast-1.amazonaws.com/dev/api/v1',
      dgServices:
        process.env.NODE_ENV === 'development'
          ? 'https://ds.api.gemtechmyanmar.com/dev/api/v1'
          : 'https://ds.api.gemtechmyanmar.com/dev/api/v1',
      busServices:
        process.env.NODE_ENV === 'development'
          ? 'https://busapi.gemtechmyanmar.com/dev/api/v1'
          : 'https://busapi.gemtechmyanmar.com/dev/api/v1',
      filghtServices:
        process.env.NODE_ENV === 'development'
          ? 'https://flightapi.gemtechmyanmar.com/dev/api/v1'
          : 'https://flightapi.gemtechmyanmar.com/dev/api/v1'
    },
   
  }