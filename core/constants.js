module.exports = {
  constants: {
    modalOnDelete: { onDelete: 'cascade' },

    adminRoles: {
      superAdmin: 'SUPER_ADMIN',
        admin: 'ADMIN',
        staff: 'STAFF'
    },

    metaFields: {
      'description': 'Meta Description',
        'keywords': 'Meta Keywords',
        'og:title': 'OG Image',
        'og:image': 'OG Title',
        'og:description': 'OG Description'
    },

    adminStatus: {
      init: 'INIT',
        verified: 'VERIFIED',
        inactive: 'INACTIVE',
        deleted: 'DELETED'
    },

    userStatus: {
      init: 'INIT',
        verified: 'VERIFIED',
        inactive: 'INACTIVE',
        deleted: 'DELETED'
    },

    sshKeyRegex: /^(ssh-rsa AAAAB3NzaC1yc2|ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNT|ecdsa-sha2-nistp384 AAAAE2VjZHNhLXNoYTItbmlzdHAzODQAAAAIbmlzdHAzOD|ecdsa-sha2-nistp521 AAAAE2VjZHNhLXNoYTItbmlzdHA1MjEAAAAIbmlzdHA1Mj|ssh-ed25519 AAAAC3NzaC1lZDI1NTE5|ssh-dss AAAAB3NzaC1kc3)[0-9A-Za-z+/]+[=]{0,3}( .*)?$/,

      allowReceiptImage: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'application/pdf'],
      allowTypeImage: ['image/png', 'image/jpg', 'image/svg', 'image/jpeg', 'image/gif'],
  }
};
